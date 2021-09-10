import dotenv from 'dotenv';

dotenv.config();
export const constants = {
  secret: process.env.TOKEN_KEY,
  kakaoKey: process.env.KAKAO_KEY,
  callbackUrl: process.env.KAKAO_URL,
};
