import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { jobSeekerGuard } from './job-seeker.guard';

describe('jobSeekerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => jobSeekerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
