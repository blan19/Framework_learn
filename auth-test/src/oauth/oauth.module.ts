import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { OauthController } from './oauth.controller';
import { OauthService } from './oauth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [OauthService],
  controllers: [OauthController],
})
export class OauthModule {}
