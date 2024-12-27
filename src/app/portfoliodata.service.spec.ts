import { TestBed } from '@angular/core/testing';

import { PortfolioDataService } from './portfoliodata.service';

describe('PortfolioService', () => {
  let service: PortfolioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
