import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Speech } from '../../../types';


@Component({
  selector: 'speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.css']
})
export class SpeechListComponent {
  @Input() speeches: Speech[] = [];
  @Input() selectedSpeech?: string;
  @Output() itemclick: EventEmitter<number> = new EventEmitter<number>();

  onClick(id: number) {
    this.itemclick.emit(id);
  }
}
