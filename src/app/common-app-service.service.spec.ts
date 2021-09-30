import { TestBed } from '@angular/core/testing';

import { CommonAppServiceService } from './common-app-service.service';

describe('CommonAppServiceService', () => {
  let service: CommonAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
