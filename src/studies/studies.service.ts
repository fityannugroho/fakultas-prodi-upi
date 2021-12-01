import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudiesDocument, Study } from 'src/schema/studies.schema';

@Injectable()
export class StudiesService {
  constructor(
    @InjectModel(Study.name)
    private studyModel: Model<StudiesDocument>,
  ) {}

  async findAll() {
    return this.studyModel.find();
  }
}
