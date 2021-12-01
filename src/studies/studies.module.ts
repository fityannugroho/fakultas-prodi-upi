import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudiesSchema, Study } from 'src/schema/studies.schema';
import { StudiesController } from './studies.controller';
import { StudiesService } from './studies.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Study.name, schema: StudiesSchema }]),
  ],
  controllers: [StudiesController],
  providers: [StudiesService],
})
export class StudiesModule {}
