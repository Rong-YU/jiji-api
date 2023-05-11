import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { UserModule } from 'src/user/user.module';
import { ActivityMemberModule } from 'src/activity-member/activity-member.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Activity]),
    UserModule,
    ActivityMemberModule,
  ],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
