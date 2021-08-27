import { TestBed } from '@angular/core/testing';

import { HelpDialogService } from './help-dialog.service';

describe('HelpDialogService', () => {
  let service: HelpDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
