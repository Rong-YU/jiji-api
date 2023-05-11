import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityMemberDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  activity_id: number;
}
