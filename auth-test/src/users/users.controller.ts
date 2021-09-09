import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { RegisterDto } from 'src/dto/register.dto';
import { UsersService } from './users.service';

@Controller('/api/users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/register')
  async register(
    @Body()
    body: RegisterDto,
  ) {
    const { email, password, nickname } = body;
    const data = await this.usersService.register(email, nickname, password);

    if (data) {
      return data;
    } else {
      return new Error('회원가입에 실패했습니다');
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
