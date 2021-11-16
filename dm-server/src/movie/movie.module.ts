import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Wish } from 'src/entities/Wish';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Wish])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
