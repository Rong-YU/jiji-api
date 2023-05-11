import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  currency: string;

  start_time: string;

  end_time: string;
}
