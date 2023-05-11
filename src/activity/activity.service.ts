import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { ActivityMemberService } from 'src/activity-member/activity-member.service';
import { ActivityMember } from 'src/activity-member/entities/activity-member.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
    private userService: UserService,
    private activityMemberService: ActivityMemberService,
  ) {}

  async create(
    owner_id: number,
    createActivityDto: CreateActivityDto,
  ): Promise<Activity | null> {
    const user = await this.userService.findOne(owner_id);
    const activity = await this.activityRepository.save({
      ...createActivityDto,
      user: user,
    });
    await this.activityMemberService.create(user, activity);
    return activity;
  }

  async removeMemberFromActivity(
    owner_id: number,
    activity_id: number,
    user_id: number,
  ) {
    if (user_id === owner_id) {
      throw new HttpException(
        'You can not remove yourself from your own activity',
        HttpStatus.FORBIDDEN,
      );
    }
    const activity = await this.isOwner(activity_id, owner_id);
    return this.activityMemberService.remove(activity_id, user_id);
  }

  async addMemberToActivity(
    user_id: number,
    activity_id: number,
    user_to_be_add_id: number,
  ) {
    const user_to_be_add = await this.userService.findOne(user_to_be_add_id);
    if (!user_to_be_add) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const activity = await this.activityRepository.findOneBy({
      id: activity_id,
    });
    const isMember = await this.activityMemberService.isMember(
      activity_id,
      user_id,
    );

    if (isMember) {
      const isAlreadyMember = await this.activityMemberService.isMember(
        activity_id,
        user_to_be_add_id,
      );
      if (isAlreadyMember) {
        throw new HttpException(
          'This user is already member',
          HttpStatus.FORBIDDEN,
        );
      }
      await this.activityMemberService.create(user_to_be_add, activity);
    } else {
      throw new HttpException('Not member', HttpStatus.FORBIDDEN);
    }
  }

  async findAllByUserId(user_id: number) {
    const activities = await this.activityRepository
      .createQueryBuilder('activity')
      .innerJoin(
        ActivityMember,
        'activityMember',
        'activityMember.activity_id = activity.id',
      )
      .where('activityMember.user_id = :userId', { userId: user_id })
      .getMany();
    return activities;
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  async remove(activity_id: number, user_id: number) {
    const activity = await this.isOwner(activity_id, user_id);
    await this.activityMemberService.removeAllMember(activity_id);
    await this.activityRepository.delete({ id: activity_id });
  }

  async isOwner(activity_id: number, owner_id: number) {
    const activity = await this.activityRepository.findOneBy({
      id: activity_id,
      user: { id: owner_id },
    });
    if (activity) {
      return activity;
    } else {
      throw new HttpException('Not owner', HttpStatus.FORBIDDEN);
    }
  }
}
