import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return process.env.TOKEN;
  }

  getUser(): string {
    return 'user';
  }

  getObj(): { username: string; id: number; password: string } {
    return { username: 'Junseo Park', id: 1, password: 'flqpfk1515' };
  }
}
