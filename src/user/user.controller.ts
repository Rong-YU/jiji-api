import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getUsers(){
        return this.userService.findAll()
    }

    @Get(':id')
    getUserById(id : number){
        return this.userService.findOne(id)
    }

    @Post()
    createUser(@Body() createUserDto : CreateUserDto){
        return this.userService.create(createUserDto)
    }
}
