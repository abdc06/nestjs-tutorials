import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[] > {
    return this.prisma.user.findMany();
  }
  
  async findOne(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: {id: Number(id)}
    });
  }

  async create(data: User): Promise<User> {
    return this.prisma.user.create({
      data: data
    });
  }

  async update(id: number, data: User): Promise<User> {
    return this.prisma.user.update({
      where: {id: Number(id)},
      data: data
    });
  }

  async delete(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: {id: Number(id)}
    });
  }
}
