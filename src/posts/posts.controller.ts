import { Controller, Get, Body, Patch, Param, Delete, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post as PostModel } from '@prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
 
  @Get()
  async findAll(): Promise<PostModel[] > {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PostModel | null> {
    return this.postsService.findOne(id);
  }

  @Post()
  async create(@Body() data: PostModel): Promise<PostModel> {
    return this.postsService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: PostModel): Promise<PostModel> {
    return this.postsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<PostModel | null> {
    return this.postsService.delete(id);
  }
}
