import {
  Controller,
  Get,
  Post,
  Request,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { AuthGuard } from '@nestjs/passport';
import { EditMemberDto } from './dto/edit-member.dto';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Request() req: any,
    @Body() createActivityDto: CreateActivityDto,
  ) {
    return await this.activityService.create(req.user.id, createActivityDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('')
  findAll(@Request() req) {
    return this.activityService.findAllByUserId(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('addMember')
  async addMember(@Request() req, @Body() editMemberDto: EditMemberDto) {
    console.log(req.user);

    return await this.activityService.addMemberToActivity(
      req.user.id,
      editMemberDto.activity_id,
      editMemberDto.user_id,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('removeMember')
  async removeMember(@Request() req, @Body() editMemberDto: EditMemberDto) {
    return await this.activityService.removeMemberFromActivity(
      req.user.id,
      editMemberDto.activity_id,
      editMemberDto.user_id,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Request() req, @Param('id') id: number) {
    return this.activityService.remove(id, req.user.id);
  }
}
