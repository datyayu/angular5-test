import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpeechListComponent } from './speech-list/speech-list.component';
import { SpeechListViewComponent } from './speech-list-view/speech-list-view.component';
import { SharedModule } from '../shared/shared.module';

export const SpeechListView = SpeechListViewComponent;

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SharedModule
  ],
  declarations: [SpeechListComponent, SpeechListViewComponent],
  exports: [SpeechListViewComponent]
})
export class SpeechListModule { }
