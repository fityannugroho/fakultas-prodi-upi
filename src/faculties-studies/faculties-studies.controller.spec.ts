import { Test, TestingModule } from '@nestjs/testing';
import { FacultiesStudiesController } from './faculties-studies.controller';

describe('FacultiesStudiesController', () => {
  let controller: FacultiesStudiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacultiesStudiesController],
    }).compile();

    controller = module.get<FacultiesStudiesController>(FacultiesStudiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
