import { Controller, Get, Param } from '@nestjs/common';
import { StudiesService } from './studies.service';

@Controller('prodi')
export class StudiesController {
  constructor(private studiesService: StudiesService) {}

  /**
   * Get all study programs.
   * @returns All study programs.
   */
  @Get()
  async getStudies() {
    return {
      data: (await this.studiesService.findAll()).map((study) => ({
        kode: study.kode,
        prodi: study.prodi,
      })),
    };
  }

  /**
   * Get a study program from specified code.
   * @param studyCode The code of study program.
   * @returns The match study program.
   */
  @Get(':kodeProdi')
  async getStudyByCode(@Param('kodeProdi') studyCode: string) {
    const study = await this.studiesService.findByCode(studyCode);

    // Response validation
    if (study === null) {
      return {
        errors: [
          {
            status: '404',
            title: 'Tidak ditemukan',
            detail: 'Kode prodi tidak ditemukan',
          },
        ],
      };
    }

    return {
      data: {
        kode: study.kode,
        prodi: study.prodi,
        fakultas: study.fakultas,
      },
    };
  }
}
