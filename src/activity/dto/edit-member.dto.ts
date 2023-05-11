import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class EditMemberDto {
  @IsNotEmpty()
  activity_id: number;

  @IsNotEmpty()
  user_id: number;
}
