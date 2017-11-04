import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpeechSearchViewComponent } from './speech-search-view/speech-search-view.component';
import { SpeechSearchResultsComponent } from './speech-search-results/speech-search-results.component';

export const SpeechSearchView = SpeechSearchViewComponent;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([])
  ],
  exports: [SpeechSearchViewComponent],
  declarations: [SpeechSearchViewComponent, SpeechSearchResultsComponent]
})
export class SpeechSearchModule { }
