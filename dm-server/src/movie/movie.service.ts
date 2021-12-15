import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Wish } from 'src/entities/Wish';
import { Connection, getManager, Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    @InjectRepository(Wish) private wishRepository: Repository<Wish>,
    private connection: Connection,
  ) {}
  async get_wishList(userId: number) {
    try {
      const user = await this.connection.manager
        .getRepository(Users)
        .findOne({ where: { id: userId } });

      if (!user) {
        throw new HttpException('유저 정보가 존재하지않습니다.', 401);
      }
      const wishList = await this.connection.manager
        .getRepository(Wish)
        .find({ where: { user } });

      console.log(wishList);

      if (!wishList) {
        throw new HttpException('위시리스트가 존재하지 않습니다', 401);
      }

      return wishList;
    } catch (e) {
      console.error(e);
    }
    return null;
  }
  async register_wishList(movieId: number, userId: number) {
    try {
      const user = await getManager()
        .createQueryBuilder(Users, 'user')
        .where('user.id = :userId', { userId })
        .getOne();

      const wish = await getManager()
        .createQueryBuilder(Wish, 'wish')
        .where('wish.movieId = :movieId', { movieId })
        .andWhere('wish.user.id = :id', { id: user.id })
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
      } else {
        throw new HttpException('이미 위시리스트에 존재합니다', 401);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async delete_wishList(userId: number, movieId: number) {
    const queryRunner = this.connection.createQueryRunner();
    try {
      const user = await queryRunner.manager
        .getRepository(Users)
        .findOne({ where: { id: userId } });
      const wish = await queryRunner.manager
        .getRepository(Wish)
        .find({ where: { user } });

      if (!wish) {
        throw new HttpException('위시리스트가 존재하지 않습니다', 401);
      }
      const filteredWish = wish.filter((item) => item.movieId !== movieId);

      await queryRunner.manager
        .createQueryBuilder()
        .update(Users)
        .set({ wishList: filteredWish })
        .where('id = :id', { id: user.id })
        .execute();

      return { success: true, msg: '위시리스트 항목을 삭제했습니다' };
    } catch (e) {
      console.error(e);
    }
  }
}
