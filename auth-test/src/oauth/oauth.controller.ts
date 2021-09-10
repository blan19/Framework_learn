import { Controller, Get, Request, Response, UseGuards } from '@nestjs/common';
import { KakaoAuthGuard } from 'src/auth/kakao-auth.guard';

@Controller('oauth')
export class OauthController {
  @UseGuards(KakaoAuthGuard)
  @Get('/kakao')
  async kakaoLogin(@Request() req, @Response({ passthrough: true }) res) {
    const token = req.user;
    console.log(token);
    if (!token) {
      return null;
    }

    await res.cookie('access_cookie', token, { httpOnly: true });
    return res.redirect('http://localhost:3000/main');
  }

  @Get('/github')
  async githubLogin() {
    return null;
  }
}
