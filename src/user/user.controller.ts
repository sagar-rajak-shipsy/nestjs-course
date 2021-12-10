import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser() {
    const users = this.userService.getUsers();
    return users;
  }

  @Post()
  async createUser(@Body() userDto: UserDto) {
    const userCreated = await this.userService.adduser(userDto);
    return userCreated;
  }
}
