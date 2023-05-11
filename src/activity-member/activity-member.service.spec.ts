import { Test, TestingModule } from '@nestjs/testing';
import { ActivityMemberService } from './activity-member.service';

describe('ActivityMemberService', () => {
  let service: ActivityMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityMemberService],
    }).compile();

    service = module.get<ActivityMemberService>(ActivityMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
