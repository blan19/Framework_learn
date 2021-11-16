import {
  Controller,
  HttpException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { MovieService } from './movie.service';

@Controller('/api/movie')
export class MovieController {
  constructor(private movieService: MovieService) {}
  @UseGuards(LoggedInGuard)
  @Post('/register')
  async register(@Request() req) {
    const { userId, movieId } = req.body;
    if (!userId && !movieId) {
      throw new HttpException('영화 아이디와 유저 아이디를 보내주세요', 400);
    }
    const result = await this.movieService.register_wishList(movieId, userId);
    if (result) {
      return result;
    }
    return null;
  }

  @UseGuards(LoggedInGuard)
  @Post('/delete')
  async delete(@Request() req) {
    const { userId, movieId } = req.body;
    if (!userId && !movieId) {
      throw new HttpException('영화 아이디와 유저 아이디를 보내주세요', 400);
    }
    const result = await this.movieService.delete_wishList(movieId, userId);
    if (result) {
      return result;
    }
    return null;
  }
}
