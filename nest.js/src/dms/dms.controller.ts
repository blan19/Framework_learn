import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:workspace/dms')
export class DmsController {
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한 번에 가져오는 개수',
  })
  @Get(':id/chats')
  getChat(@Query() query, @Param() param) {}

  @ApiQuery({
    name: 'Page',
    required: true,
    description: '불러올 페이지',
  })
  @Post(':id/chats')
  postChat() {}
}
