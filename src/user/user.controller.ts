import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //   @Get()
  //   getUsers() {
  //     return this.userService.findAll();
  //   }

  //   @UseGuards(AuthGuard('jwt'))
  //   @Get(':id')
  //   getUserById(id: number) {
  //     return this.userService.findOne(id);
  //   }

  //   @Post()
  //   createUser(@Body() createUserDto: CreateUserDto) {
  //     return this.userService.create(createUserDto);
  //   }
}
