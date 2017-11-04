import { Component, OnInit, Input } from '@angular/core';
import { Speech } from '../../../types';

@Component({
  selector: 'speech-search-results',
  templateUrl: './speech-search-results.component.html',
  styleUrls: ['./speech-search-results.component.css']
})
export class SpeechSearchResultsComponent {
  @Input() speeches: Speech[] = [];
}
