import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware, functionalLogger } from './common/middleware/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { ExceptionsController } from './exceptions/exceptions.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, UsersModule],
  controllers: [AppController, ExceptionsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, functionalLogger)
      .forRoutes(CatsController);
  }
}
