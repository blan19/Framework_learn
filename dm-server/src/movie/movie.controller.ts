import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { MovieService } from './movie.service';

@Controller('/api/movie')
export class MovieController {
  constructor(private movieService: MovieService) {}
  @Get(':id')
  async getWish(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    console.log(id);

    if (!id) {
      throw new HttpException('유저 아이디를 보내주세요', 401);
    }
    // const wishList = await this.movieService.get_wishList(userId);

    // if (wishList) {
    //   return wishList;
    // }
    return null;
  }

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
