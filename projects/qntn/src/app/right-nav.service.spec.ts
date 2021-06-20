/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RightNavService } from './right-nav.service';

describe('Service: RightNav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RightNavService]
    });
  });

  it('should ...', inject([RightNavService], (service: RightNavService) => {
    expect(service).toBeTruthy();
  }));
});
