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
    const { id, provider } = profile;

    const exist = await this.usersRepository.findOne({
      provider,
      snsId: id,
    });

    if (exist) {
      const { password, snsId, ...rest } = exist;
      return rest;
    }

    const newUser = await this.usersRepository.save({
      nickname: profile.username,
      snsId: profile.id,
      provider: profile.provider,
      email:
        profile._json &&
        profile._json.kakao_account.has_email &&
        profile._json.kakao_account.email,
      password: null,
    });

    const { snsId, password, ...rest } = newUser;
    return rest;
  }
}
