import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy } from 'passport-kakao';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { AuthService } from './auth.service';
import { constants } from './constants';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    private authService: AuthService,
  ) {
    super({
      clientID: constants.kakaoKey,
      clientSecret: '',
      callbackURL: 'http://localhost:4000/oauth/kakao',
    });
  }

  async validate(accessToken, refreshToken, profile, done): Promise<any> {
    const { id, _json, username } = profile;

    const user = {
      id,
      email: _json.kakao_account.email || null,
      nickname: username,
    };

    const kakaoEmail = await this.usersRepository.findOne({
      where: { email: _json.kakao_account.email },
    });

    if (kakaoEmail) {
      const token = await this.authService.login(user);
      return token;
    }

    const newUser = await this.usersRepository.save({
      email: _json.kakao_account.email,
      nickname: username,
      password: null,
    });

    const { password, ...rest } = newUser;
    const token = await this.authService.login(rest);
    return token;
  }
}
