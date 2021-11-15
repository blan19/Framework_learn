import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { getManager, Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password'],
    });
  }

  async register(email: string, password: string) {
    try {
      const user = await getManager()
        .createQueryBuilder(Users, 'user')
        .where('user.email = :email', { email })
        .getOne();

      if (user) {
        throw new HttpException('이미 존재하는 이메일입니다', 401);
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      await getManager()
        .createQueryBuilder()
        .insert()
        .into(Users)
        .values({ email, password: hashedPassword })
        .execute();

      return { success: true, msg: '회원가입에 성공했습니다' };
    } catch (e) {
      console.error(e);
    }
  }
}
