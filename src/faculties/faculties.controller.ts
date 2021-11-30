import { Controller, Get } from '@nestjs/common';
import { FacultiesService } from './faculties.service';

@Controller('fakultas')
export class FacultiesController {
  constructor(private facultiesService: FacultiesService) {}

  /**
   * Get all faculties.
   * @returns All faculties
   */
  @Get()
  async getFaculties() {
    const faculties = await this.facultiesService.findAllFromStudies();
    return {
      data: faculties.map((faculty) => ({ namaFakultas: faculty })),
    };
  }
}
