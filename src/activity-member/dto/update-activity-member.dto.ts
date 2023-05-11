import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityMemberDto } from './create-activity-member.dto';

export class UpdateActivityMemberDto extends PartialType(CreateActivityMemberDto) {}
