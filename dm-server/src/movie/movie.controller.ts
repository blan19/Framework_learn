import { Controller, Post } from '@nestjs/common';

@Controller('/api/movie')
export class MovieController {
  @Post('/register')
  register() {
    return null;
  }

  @Post('/delete')
  delete() {
    return null;
  }
}
