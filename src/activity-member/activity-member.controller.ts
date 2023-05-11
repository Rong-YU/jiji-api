import {
  Controller,
  Get,
  Post,
  Request,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActivityMemberService } from './activity-member.service';
import { CreateActivityMemberDto } from './dto/create-activity-member.dto';
import { UpdateActivityMemberDto } from './dto/update-activity-member.dto';

@Controller('activity-member')
export class ActivityMemberController {
  constructor(private readonly activityMemberService: ActivityMemberService) {}

  // @Post()
  // create(
  //   @Request() req,
  //   @Body() createActivityMemberDto: CreateActivityMemberDto,
  // ) {
  //   return this.activityMemberService.create(
  //     req.user.id,
  //     createActivityMemberDto,
  //   );
  // }

  // @Get()
  // findAll() {
  //   return this.activityMemberService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.activityMemberService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateActivityMemberDto: UpdateActivityMemberDto,
  // ) {
  //   return this.activityMemberService.update(+id, updateActivityMemberDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.activityMemberService.remove(+id);
  // }
}
