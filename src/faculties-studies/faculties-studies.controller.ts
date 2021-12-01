import { Controller, Get } from '@nestjs/common';
import { StudiesService } from 'src/studies/studies.service';

@Controller('fakultas-prodi')
export class FacultiesStudiesController {
  constructor(private studiesService: StudiesService) {}

  /**
   * Get all faculties and study programs.
   * @returns All faculties and study programs.
   */
  @Get()
  async getAll() {
    const studies = await this.studiesService.findAll();
    const facultyNames = studies
      .map((study) => study.fakultas)
      .filter((val, i, arr) => arr.indexOf(val) === i);

    return {
      data: {
        universitas: 'Universitas Pendidikan Indonesia',
        listFakultas: facultyNames.map((facultyName) => ({
          namaFakultas: facultyName,
          listProdi: studies
            .filter((study) => study.fakultas === facultyName)
            .map((study) => ({
              kodeProdi: study.kode,
              namaProdi: study.prodi,
            })),
        })),
      },
    };
  }
}
