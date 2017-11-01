import { TestBed, inject } from '@angular/core/testing';

import { SpeechStorageService } from './speech-storage.service';

describe('SpeechStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeechStorageService]
    });
  });

  it('should be created', inject([SpeechStorageService], (service: SpeechStorageService) => {
    expect(service).toBeTruthy();
  }));
});
