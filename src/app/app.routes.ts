import { Route } from '@angular/router';
import { CreateSpeechView, SpeechListView, SpeechSearchView } from './modules';


export const routes: Route[] = [
  { path: 'speeches', component: SpeechListView },
  { path: 'speeches/:id', component: SpeechListView },
  { path: 'search', component: SpeechSearchView },
  { path: 'new', component: CreateSpeechView },
  { path: '**', redirectTo: 'speeches' }
];
