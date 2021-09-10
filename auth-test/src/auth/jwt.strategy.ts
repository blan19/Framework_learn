import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { constants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          const data = req?.cookies['access_cookie'];

          if (!data) {
            return null;
          }

          return data.token;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: constants.secret,
    });
  }

  async validate(paylaod: any) {
    return { id: paylaod.id, email: paylaod.email, nickname: paylaod.nickname };
  }
}
