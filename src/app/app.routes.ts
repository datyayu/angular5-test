import { Route } from '@angular/router';
import { CreateSpeechView, SpeechListView } from './modules';


export const routes: Route[] = [
  { path: 'all', component: SpeechListView },
  { path: 'new', component: CreateSpeechView },
  { path: '**', redirectTo: 'all' }
];
