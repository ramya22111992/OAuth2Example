import { TestBed } from '@angular/core/testing';

import { ErrorNotificationService } from './error-notification.service';

describe('ErrorNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorNotificationService = TestBed.get(ErrorNotificationService);
    expect(service).toBeTruthy();
  });
});
