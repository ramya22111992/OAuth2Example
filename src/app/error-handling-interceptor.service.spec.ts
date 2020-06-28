import { TestBed } from '@angular/core/testing';

import { ErrorHandlingInterceptorService } from './error-handling-interceptor.service';

describe('ErrorHandlingInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorHandlingInterceptorService = TestBed.get(ErrorHandlingInterceptorService);
    expect(service).toBeTruthy();
  });
});
