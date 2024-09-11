import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class RootModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
