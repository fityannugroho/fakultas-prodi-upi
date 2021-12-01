import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudiesSchema, Study } from 'src/schema/studies.schema';
import { StudiesService } from 'src/studies/studies.service';
import { FacultiesStudiesController } from './faculties-studies.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Study.name, schema: StudiesSchema }]),
  ],
  controllers: [FacultiesStudiesController],
  providers: [StudiesService],
})
export class FacultiesStudiesModule {}
