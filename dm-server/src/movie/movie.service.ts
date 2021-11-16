import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Wish } from 'src/entities/Wish';
import { getManager, Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    @InjectRepository(Wish) private wishRepository: Repository<Wish>,
  ) {}
  async register_wishList(movieId: number, userId: number) {
    try {
      const user = await getManager()
        .createQueryBuilder(Users, 'user')
        .where('user.id = :userId', { userId })
        .getOne();

      user.wishList.forEach((item) => {
        if (item.movieId === movieId) {
          throw new HttpException('이미 위시리스트에 존재합니다.', 401);
        }
      });

      const wish = await getManager()
        .createQueryBuilder(Wish, 'wish')
        .where('wish.movieId = :movieId', { movieId })
        .andWhere('wish.user = :user', { user })
        .getOne();
      if (!wish) {
        await getManager()
          .createQueryBuilder()
          .insert()
          .into(Wish)
          .values({
            movieId,
            user,
          })
          .execute();
        return { success: true, msg: '위시리스트에 저장했습니다' };
      }

      return null;
    } catch (e) {
      console.error(e);
    }
  }
}
