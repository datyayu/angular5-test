import { Route } from '@angular/router';
import { CreateSpeechView, SpeechListView } from './modules';


export const routes: Route[] = [
  { path: 'speeches', component: SpeechListView },
  { path: 'speeches/:id', component: SpeechListView },
  { path: 'new', component: CreateSpeechView },
  { path: '**', redirectTo: 'speeches' }
];
