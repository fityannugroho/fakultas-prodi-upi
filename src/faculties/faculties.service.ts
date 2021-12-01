import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Study, StudiesDocument } from 'src/schema/studies.schema';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectModel(Study.name)
    private studyModel: Model<StudiesDocument>,
  ) {}

  async findAllFromStudies() {
    // Get all data from studies collection.
    const studies = await this.studyModel.find().exec();

    // Filter data to get name of faculties.
    return studies
      .map((study) => study.fakultas)
      .filter((val, i, arr) => arr.indexOf(val) === i);
  }

  async findStudiesByFacultyName(facultyName: string) {
    // Get all studies that match with facultyName.
    return await this.studyModel.find({ fakultas: facultyName }).exec();
  }
}
