import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('email', ['email'], { unique: true })
@Entity()
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @ApiProperty({
    example: 'oponize@naver.com',
    description: '이메일',
    required: true,
  })
  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @ApiProperty({
    example: 'oponize',
    description: '닉네임',
    required: true,
  })
  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @ApiProperty({
    example: '********',
    description: '패스워드',
    required: true,
  })
  @Column('varchar', { name: 'password', select: false, length: 100 })
  password: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;
}
