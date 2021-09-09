import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ChannelChats } from './ChannelChats';
import { ChannelMembers } from './ChannelMembers';
import { Dms } from './Dms';
import { Mentions } from './Mentions';
import { Workspacemembers } from './Workspacemembers';
import { Workspaces } from './Workspaces';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Index('email', ['email'], { unique: true })
@Entity('users', { schema: 'sleact' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsEmail()
  @ApiProperty({
    example: 'oponize@naver.com',
    description: '이메일',
    required: true,
  })
  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'oponize',
    description: '닉네임',
    required: true,
  })
  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '********',
    description: '패스워드',
    required: true,
  })
  @Column('varchar', { name: 'password', length: 100 })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => ChannelChats, (channelChats) => channelChats.user)
  channelChats: ChannelChats[];

  @OneToMany(() => ChannelMembers, (channelMembers) => channelMembers.user)
  channelMembers: ChannelMembers[];

  @OneToMany(() => Dms, (dms) => dms.sender)
  dms: Dms[];

  @OneToMany(() => Dms, (dms) => dms.receiver)
  dms2: Dms[];

  @OneToMany(() => Mentions, (mentions) => mentions.sender)
  mentions: Mentions[];

  @OneToMany(() => Mentions, (mentions) => mentions.receiver)
  mentions2: Mentions[];

  @OneToMany(
    () => Workspacemembers,
    (workspacemembers) => workspacemembers.user,
  )
  workspacemembers: Workspacemembers[];

  @OneToMany(() => Workspaces, (workspaces) => workspaces.owner)
  workspaces: Workspaces[];
}
