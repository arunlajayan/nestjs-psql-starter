import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.UserRepository.find();
  }

  async findOne(id: number | any): Promise<User> {
    return await this.UserRepository.findOne(id);
  }

  async create(UserData: Partial<User>): Promise<User> {
    const User = this.UserRepository.create(UserData);
    return await this.UserRepository.save(User);
  }

  async update(id: number | any, UserData: Partial<User>): Promise<User> {
    await this.UserRepository.update(id, UserData);
    return await this.UserRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.UserRepository.delete(id);
  }
}
