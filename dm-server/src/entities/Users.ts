import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Wish } from './Wish';

@Entity('users', { schema: 'dmovie' })
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'email', unique: true })
  email: string;

  @Column('varchar', { name: 'password' })
  password: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @OneToMany(() => Wish, (wish) => wish.user, { cascade: true })
  wishList: Wish[];
}
