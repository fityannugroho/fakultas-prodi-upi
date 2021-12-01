import { Controller, Get, Param } from '@nestjs/common';
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

  /**
   * Get all study programs from specific faculty name.
   * @param facultyName The faculty name (case-sensitive).
   * @returns List of studies.
   */
  @Get(':namaFakultas/prodi')
  async getStudiesByFacultyName(@Param('namaFakultas') facultyName: string) {
    const studies = await this.facultiesService.findStudiesByFacultyName(
      facultyName,
    );

    // Response validation
    if (studies.length === 0) {
      return {
        errors: [
          {
            status: '400',
            title: 'Tidak ditemukan',
            detail: 'Prodi dari fakultas bersangkutan tidak ditemukan',
          },
        ],
      };
    }

    return {
      data: {
        namaFakultas: facultyName,
        listProdi: studies.map((study) => ({
          kodeProdi: study.kode,
          namaProdi: study.prodi,
        })),
      },
    };
  }
}
