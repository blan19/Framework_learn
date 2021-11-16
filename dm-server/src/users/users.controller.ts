import {
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpException,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { NotLoggedInGuard } from 'src/auth/not-logged-in.guard';
import { UsersService } from './users.service';

@Controller('/api/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return null;
  }

  @UseGuards(NotLoggedInGuard)
  @Post('/register')
  async register(@Request() req) {
    const { email, password } = req;
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new HttpException('존재하지 않는 이메일입니다', 401);
    }

    const result = await this.userService.register(email, password);

    if (result) {
      return result;
    } else {
      throw new ForbiddenException();
    }
  }

  @UseGuards(NotLoggedInGuard)
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req) {
    return req.user;
  }

  @UseGuards(LoggedInGuard)
  @Post('/logout')
  logout(@Response({ passthrough: true }) res) {
    res.clearCookie('connect.sid', { httpOnly: true });
    return res.send({ success: true, msg: '로그아웃에 성공했습니다' });
  }

  @Delete('/delete')
  delete() {
    return null;
  }
}
