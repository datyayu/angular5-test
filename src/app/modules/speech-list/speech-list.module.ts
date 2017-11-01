import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechListComponent } from './speech-list/speech-list.component';
import { SpeechListViewComponent } from './speech-list-view/speech-list-view.component';
import { SharedModule } from '../shared/shared.module';

export const SpeechListView = SpeechListViewComponent;

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SpeechListComponent, SpeechListViewComponent],
  exports: [SpeechListViewComponent]
})
export class SpeechListModule { }
