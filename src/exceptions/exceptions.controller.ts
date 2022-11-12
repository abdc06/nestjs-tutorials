import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ForbiddenException } from 'src/common/exception/forbidden.exception';

@Controller('exceptions')
export class ExceptionsController {

    @Get()
    async findAll() {
      try {
        throw new ForbiddenException();
      } catch (error) { 
        throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
      }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        throw new ForbiddenException();
    }

}
