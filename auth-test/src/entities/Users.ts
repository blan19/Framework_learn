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

  @Column('varchar', {
    name: 'email',
    unique: true,
    length: 30,
    nullable: true,
  })
  email: string;

  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @Column('varchar', {
    name: 'password',
    select: false,
    length: 100,
    nullable: true,
  })
  password: string | null;

  @Column('int', { name: 'snsId', nullable: true })
  snsId: number | null;

  @Column('varchar', { name: 'provider', default: 'local' })
  provider: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date | null;
}
