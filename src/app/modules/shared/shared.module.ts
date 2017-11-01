import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SpeechFormComponent } from './speech-form/speech-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([]),
    NgbModule
  ],
  exports: [SpeechFormComponent],
  declarations: [SpeechFormComponent]
})
export class SharedModule { }
