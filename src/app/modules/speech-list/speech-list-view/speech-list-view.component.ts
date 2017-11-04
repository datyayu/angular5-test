import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SpeechStorageService } from '../../../services';
import { Speech } from '../../../types';


@Component({
  selector: 'speech-list-view',
  templateUrl: './speech-list-view.component.html',
  styleUrls: ['./speech-list-view.component.css']
})
export class SpeechListViewComponent implements OnInit {
  speeches$: Observable<Speech[]> = Observable.from([]);
  selectedSpeech?: Speech = undefined;
  alert?: string = '';
  hasId: boolean = false;

  constructor(
    private speechStorageService: SpeechStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.speeches$ = this.route.paramMap
      .map((params: ParamMap) => {
        const selectedId = params.get('id');

        if (selectedId) {
          this.hasId = true;
          this.selectedSpeech = this.speechStorageService.getSpeechById(selectedId);
        }

        return this.speechStorageService.getAllSpeeches();
      });
  }


  hideAlert() {
    this.alert = '';
  }

  onSpeechUpdate(speech: Speech) {
    this.speechStorageService.saveSpeech(speech);
    this.alert = 'updated';

    this.speeches$ = this.speeches$.map(x => x);
  }

  onSpeechDelete(speech: Speech) {
    this.speechStorageService.deleteSpeech(speech.id);

    this.selectedSpeech = undefined;
    this.alert = 'deleted';
    this.router.navigateByUrl('/all');

    this.speeches$ = this.speeches$.map(x => x);
  }

  onSpeechShare() {
    this.alert = 'shared';
  }
}
