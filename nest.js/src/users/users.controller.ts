import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { UserDto } from 'src/common/dto/user.dto';
import { UndefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('User')
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiResponse({
    type: UserDto,
  })
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @Post()
  register(@Body() data: JoinRequestDto) {
    const { email, nickname, password } = data;
    this.usersService.register(email, nickname, password);
  }

  @ApiResponse({
    type: UserDto,
  })
  @Post('login')
  Login(@Req() req) {
    return req.user;
  }

  @Post('logout')
  LogOut(@Req() req: Request, @Res() res: Response) {
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
