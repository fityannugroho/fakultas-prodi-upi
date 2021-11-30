import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FacultiesMiddleware } from 'src/middleware/faculties.middleware';
import { Study, StudiesSchema } from 'src/schema/studies.schema';
import { FacultiesController } from './faculties.controller';
import { FacultiesService } from './faculties.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Study.name, schema: StudiesSchema }]),
  ],
  controllers: [FacultiesController],
  providers: [FacultiesService],
})
export class FacultiesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FacultiesMiddleware).forRoutes(FacultiesController);
  }
}
