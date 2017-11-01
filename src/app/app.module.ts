import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { modules } from './modules';
import { services } from './services';
import { routes } from './app.routes';
import { AppComponent } from './app.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [
    ...services
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),

    ...modules // App modules
  ]
})
export class AppModule { }
