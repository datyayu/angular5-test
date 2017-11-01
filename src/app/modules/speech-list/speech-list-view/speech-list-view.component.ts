import { Component, OnInit } from '@angular/core';

import { SpeechStorageService } from '../../../services';
import { Speech } from '../../../types';


@Component({
  selector: 'app-speech-list-view',
  templateUrl: './speech-list-view.component.html',
  styleUrls: ['./speech-list-view.component.css']
})
export class SpeechListViewComponent implements OnInit {
  speeches: Speech[] = [];
  selectedSpeech?: Speech = undefined;
  alert?: string = '';


  constructor(private speechStorageService: SpeechStorageService) { }

  ngOnInit() {
    this.speeches = this.speechStorageService.getAllSpeeches();
  }


  hideAlert() {
    this.alert = '';
  }

  onSpeechSelect(id: string) {
    const speech = this.speeches.find(sp => sp.id === id);

    this.selectedSpeech = speech;
    this.alert = '';
  }

  onSpeechUpdate(speech: Speech) {
    this.speechStorageService.saveSpeech(speech);
    this.alert = 'updated';
  }

  onSpeechDelete(speech: Speech) {
    this.speeches = this.speeches.filter(sp => sp.id !== speech.id);
    this.speechStorageService.deleteSpeech(speech.id);

    this.selectedSpeech = undefined;
    this.alert = 'deleted';
  }

  onSpeechShare() {
    this.alert = 'shared';
  }
}
