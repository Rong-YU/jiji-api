import { Test, TestingModule } from '@nestjs/testing';
import { ActivityMemberController } from './activity-member.controller';
import { ActivityMemberService } from './activity-member.service';

describe('ActivityMemberController', () => {
  let controller: ActivityMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityMemberController],
      providers: [ActivityMemberService],
    }).compile();

    controller = module.get<ActivityMemberController>(ActivityMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
