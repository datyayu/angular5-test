import { CreateSpeechModule } from './create-speech/create-speech.module';
import { NavigationModule } from './navigation/navigation.module';

export const modules = [
  CreateSpeechModule,
  NavigationModule,
];

export * from './create-speech/create-speech.module';
export * from './navigation/navigation.module';
