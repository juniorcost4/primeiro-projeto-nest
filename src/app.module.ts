import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { logger } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(logger)
        .exclude(
          { path: 'cats', method: RequestMethod.PUT },
          { path: 'cats', method: RequestMethod.POST },
          'cats/(.*)',
        )
        .forRoutes(CatsController);
  }
}
