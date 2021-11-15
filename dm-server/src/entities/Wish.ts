import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './Users';

@Entity('wish', { schema: 'dmovie' })
export class Wish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { name: 'movieId', unique: true })
  movieId: number;

  @ManyToOne(() => Users, (user) => user.wishList)
  user: Users;
}
