import { TestBed } from '@angular/core/testing';

import { ExtUrlResolverService } from './ext-url-resolver.service';

describe('ExtUrlResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtUrlResolverService = TestBed.get(ExtUrlResolverService);
    expect(service).toBeTruthy();
  });
});
