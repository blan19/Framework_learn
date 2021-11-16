import { Controller, Post, UseGuards } from '@nestjs/common';
import { LoggedInGuard } from 'src/auth/logged-in.guard';

@Controller('/api/movie')
export class MovieController {
  @UseGuards(LoggedInGuard)
  @Post('/register')
  register() {
    return null;
  }

  @UseGuards(LoggedInGuard)
  @Post('/delete')
  delete() {
    return null;
  }
}
