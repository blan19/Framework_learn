import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('userInfo')
  getObj(): UserInfo {
    return this.appService.getObj();
  }
}

interface UserInfo {
  username: string;
  id: number;
  password: string;
}
