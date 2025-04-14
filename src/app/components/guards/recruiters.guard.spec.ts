import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { recruitersGuard } from './recruiters.guard';

describe('recruitersGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => recruitersGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
