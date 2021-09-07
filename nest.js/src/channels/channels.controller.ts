import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Channel')
@Controller('/api/workspaces/:workspace/channels')
export class ChannelsController {
  @Get()
  getAllChannels() {}

  @Get()
  getSpecificChannel() {}

  @Post()
  createChannels() {}

  @Get(':name/chats')
  getChat(@Query() query, @Param() param) {}

  @Post(':name/chats')
  postChat() {}

  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  inviteMembers() {}
}
