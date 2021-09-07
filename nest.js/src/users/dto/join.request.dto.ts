import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'oponize@naver.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: 'oponize',
    description: '닉네임',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: '*******',
    description: '패스워드',
    required: true,
  })
  public password: string;
}
