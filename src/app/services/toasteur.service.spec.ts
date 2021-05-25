import { TestBed } from '@angular/core/testing';

import { ToasteurService } from './toasteur.service';

describe('ToasteurService', () => {
  let service: ToasteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
