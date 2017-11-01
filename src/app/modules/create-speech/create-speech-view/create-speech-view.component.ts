import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Speech } from '../../../types';
import { SpeechStorageService } from '../../../services';


@Component({
  selector: 'create-speech-view',
  templateUrl: './create-speech-view.component.html',
  styleUrls: ['./create-speech-view.component.css']
})
export class CreateSpeechViewComponent {
  constructor(
    private router: Router,
    private speechStorageService: SpeechStorageService
  ) {}

  onSaveSpeech(speech: Speech) {
    this.speechStorageService.saveSpeech(speech);

    this.router.navigateByUrl('/all')
  }
}
