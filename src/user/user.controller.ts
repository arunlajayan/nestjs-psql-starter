import { UserService } from './user.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.UserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.UserService.findOne(Number(id));
  }

  @Post()
  create(@Body() UserData: Partial<User>): Promise<User> {
    return this.UserService.create(UserData);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() UserData: Partial<User>,
  ): Promise<User> {
    return this.UserService.update(Number(id), UserData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.UserService.remove(Number(id));
  }
}
