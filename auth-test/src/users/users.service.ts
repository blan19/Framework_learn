import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async findByEmail(email: string): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'nickname'],
    });

    return user;
  }

  async register(
    email: string,
    nickname: string,
    password: string,
  ): Promise<any> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (user) {
      throw new HttpException('이미 존재하는 계정입니다', 401);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const { password: userPassword, ...rest } = await this.userRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });

    return rest;
  }
}
