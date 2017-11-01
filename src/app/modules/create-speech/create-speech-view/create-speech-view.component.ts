import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Speech } from '../../../types';
import { SpeechStorageService } from '../../../services';

const speechPlaceholder: Speech = {
  author: '',
  title: '',
  text: '',
  keywords: '',
  date: null
};

@Component({
  selector: 'create-speech-view',
  templateUrl: './create-speech-view.component.html',
  styleUrls: ['./create-speech-view.component.css']
})
export class CreateSpeechViewComponent implements OnInit {
  speechPlaceholder = {};

  constructor(
    private router: Router,
    private speechStorageService: SpeechStorageService
  ) {}

  ngOnInit() {
    this.speechPlaceholder = {...speechPlaceholder};
  }


  onSaveSpeech(speech: Speech) {
    this.speechStorageService.saveSpeech(speech);

    this.router.navigateByUrl('/all')
  }
}
