import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeechStorageService } from '../../services';
import { SharedModule } from '../shared/shared.module';
import { CreateSpeechViewComponent } from './create-speech-view/create-speech-view.component';


export const CreateSpeechView = CreateSpeechViewComponent;

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CreateSpeechViewComponent
  ],
  declarations: [
    CreateSpeechViewComponent
  ]
})
export class CreateSpeechModule { }
