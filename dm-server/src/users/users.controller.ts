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
import { User } from 'src/decorator/user.decorator';
import { UsersService } from './users.service';

@Controller('/api/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('/')
  getUsers(@User() user) {
    console.log(user);

    return user;
  }

  @UseGuards(NotLoggedInGuard)
  @Post('/register')
  async register(@Request() req) {
    const { email, password } = req.body;
    const user = await this.userService.findByEmail(email);

    if (user) {
      throw new HttpException('이미 등록된 이메일입니다', 401);
    }

    const result = await this.userService.register(email, password);

    if (result) {
      return result;
    } else {
      throw new ForbiddenException();
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req) {
    const user = req.user;
    if (user) {
      return user;
    }
    return null;
  }

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
