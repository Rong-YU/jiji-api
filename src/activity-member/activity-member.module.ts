import { Module } from '@nestjs/common';
import { ActivityMemberService } from './activity-member.service';
import { ActivityMemberController } from './activity-member.controller';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityMember } from './entities/activity-member.entity';

@Module({
  exports: [ActivityMemberService],
  imports: [UserModule, TypeOrmModule.forFeature([ActivityMember])],
  controllers: [ActivityMemberController],
  providers: [ActivityMemberService],
})
export class ActivityMemberModule {}
