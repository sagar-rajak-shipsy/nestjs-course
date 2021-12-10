import { Body, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager } from 'typeorm';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async adduser(@Body() user: UserDto) {
    getManager().transaction(async (_) => {
      const savedUser = await this.userRepository.save(user);
      return savedUser;
    });
  }

  public deleteUser(userid: string): void {
    getManager().transaction(async (_) => {
      const deletedResponse = await this.userRepository.delete(userid);
      return deletedResponse;
    });
  }

  public async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
