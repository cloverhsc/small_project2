/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetPhysiologicalInfoService } from './get-physiological-info.service';

describe('GetPhysiologicalInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPhysiologicalInfoService]
    });
  });

  it('should ...', inject([GetPhysiologicalInfoService], (service: GetPhysiologicalInfoService) => {
    expect(service).toBeTruthy();
  }));
});
