import { CreateSpeechModule } from './create-speech/create-speech.module';
import { NavigationModule } from './navigation/navigation.module';
import { SpeechListModule } from './speech-list/speech-list.module';
import { SpeechSearchModule } from './speech-search/speech-search.module';
import { SharedModule } from './shared/shared.module';

export const modules = [
  CreateSpeechModule,
  NavigationModule,
  SpeechListModule,
  SpeechSearchModule,
  SharedModule
];

export * from './create-speech/create-speech.module';
export * from './navigation/navigation.module';
export * from './speech-list/speech-list.module';
export * from './speech-search/speech-search.module';
export * from './shared/shared.module';
