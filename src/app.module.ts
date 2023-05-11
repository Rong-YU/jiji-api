import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ActivityModule } from './activity/activity.module';
import { ActivityMemberModule } from './activity-member/activity-member.module';

@Module({
  imports: [UserModule, DatabaseModule, AuthModule, ActivityModule, ActivityMemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
