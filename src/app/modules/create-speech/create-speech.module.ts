import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SpeechStorageService } from '../../services';
import { CreateSpeechFormComponent } from './create-speech-form/create-speech-form.component';
import { CreateSpeechViewComponent } from './create-speech-view/create-speech-view.component';


export const CreateSpeechView = CreateSpeechViewComponent;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    CreateSpeechFormComponent,
    CreateSpeechViewComponent
  ],
  declarations: [
    CreateSpeechFormComponent,
    CreateSpeechViewComponent
  ]
})
export class CreateSpeechModule { }
