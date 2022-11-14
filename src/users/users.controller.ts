import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[] > {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<User | null> {
    return this.usersService.findById(id);
  }

  @Post()
  async save(@Body() data: User): Promise<User> {
    return this.usersService.save(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: User): Promise<User> {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number): Promise<User | null> {
    return this.usersService.deleteById(id);
  }

}
