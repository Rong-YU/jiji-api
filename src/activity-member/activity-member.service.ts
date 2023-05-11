import { Injectable } from '@nestjs/common';
import { CreateActivityMemberDto } from './dto/create-activity-member.dto';
import { UpdateActivityMemberDto } from './dto/update-activity-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityMember } from './entities/activity-member.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { Activity } from 'src/activity/entities/activity.entity';

@Injectable()
export class ActivityMemberService {
  constructor(
    @InjectRepository(ActivityMember)
    private activityMemberRepository: Repository<ActivityMember>,
  ) {}
  async create(user: User, activity: Activity) {
    const activityMember = await this.activityMemberRepository.save({
      activity: activity,
      user: user,
    });
    return activityMember;
  }

  findAll() {
    return `This action returns all activityMember`;
  }

  async isMember(activity_id: number, user_id: number): Promise<Boolean> {
    const isMember = await this.activityMemberRepository.findOneBy({
      activity: { id: activity_id },
      user: { id: user_id },
    });
    return isMember !== null;
  }

  update(id: number, updateActivityMemberDto: UpdateActivityMemberDto) {
    return `This action updates a #${id} activityMember`;
  }

  async remove(activity_id: number, user_id: number) {
    await this.activityMemberRepository.delete({
      activity: { id: activity_id },
      user: { id: user_id },
    });
  }

  async removeAllMember(activity_id: number) {
    await this.activityMemberRepository.delete({
      activity: { id: activity_id },
    });
  }
}
