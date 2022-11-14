import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Post[] > {
    return this.prisma.post.findMany();
  }

  async findOne(id: number): Promise<Post> {
    return this.prisma.post.findUnique({
      where: {id: Number(id)}
    });
  }

  async create(data: Post): Promise<Post> {
    return this.prisma.post.create({
      data: data
    });
  }

  async update(id: number, data: Post): Promise<Post> {
    return this.prisma.post.update({
      where: {id: Number(id)},
      data: data
    });
  }

  async delete(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: {id: Number(id)}
    });
  }
}
