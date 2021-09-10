import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { RegisterDto } from 'src/dto/register.dto';
import { UsersService } from './users.service';

@Controller('/api/users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(@Request() req) {
    return req.user;
  }

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
  async login(@Request() req, @Response({ passthrough: true }) res) {
    const token = await this.authService.login(req.user);

    if (!token) {
      return null;
    }

    await res.cookie('access_cookie', token, { httpOnly: true });
    return { success: true };
  }
}
