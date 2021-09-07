import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Workspace')
@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspace() {}

  @Post()
  createWorkspace() {}

  @Get(':workspace/members')
  getAllMembersFromWorkspace() {}

  @Post(':workspace/members')
  inviteMembersToWorkspace() {}

  @Delete(':workspace/members/:id')
  kickMemberFromWorkspace() {}

  @Get(':workspace/users/:id')
  getMemberInfoInWorkspace() {}
}
