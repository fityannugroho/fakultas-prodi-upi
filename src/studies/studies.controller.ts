import { Controller, Get } from '@nestjs/common';
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
}
