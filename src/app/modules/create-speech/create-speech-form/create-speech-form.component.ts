import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Speech } from '../../../types';

const speechPlaceholder: Speech = {
  author: '',
  title: '',
  text: '',
  keywords: '',
  date: null
};


@Component({
  selector: 'create-speech-form',
  templateUrl: './create-speech-form.component.html',
  styleUrls: ['./create-speech-form.component.css']
})
export class CreateSpeechFormComponent {
  @Input() speech?: Speech = speechPlaceholder;
  @Input() isNew: boolean = true;

  @Output() save: EventEmitter<Speech> = new EventEmitter<Speech>();

  onSave() {
    this.save.emit(this.speech);
  }
}
