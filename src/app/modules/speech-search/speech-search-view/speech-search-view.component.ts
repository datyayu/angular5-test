import { Component, Input, OnInit } from '@angular/core';

import { SpeechStorageService } from '../../../services';
import { Speech } from '../../../types';


@Component({
  selector: 'speech-search-view',
  templateUrl: './speech-search-view.component.html',
  styleUrls: ['./speech-search-view.component.css']
})
export class SpeechSearchViewComponent implements OnInit {
  searchInput: string = '';
  speeches: Speech[] = [];
  displayedSpeeches: Speech[] = [];

  constructor(
    private speechStorageService: SpeechStorageService
  ) {}

  ngOnInit() {
    this.speeches = this.speechStorageService.getAllSpeeches();
    this.displayedSpeeches = this.speeches;
  }

  onInputChange() {
    const query = this.searchInput;

    this.displayedSpeeches = this.speeches.filter(speech =>
      speech.title.includes(query) || speech.keywords.includes(query)
    );
  }
}
