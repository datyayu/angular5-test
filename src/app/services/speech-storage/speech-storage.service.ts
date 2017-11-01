import { Injectable } from '@angular/core';
import * as uuid from 'uuid/v4'

import { Speech } from '../../types';


const SPEECH_KEY_PREFIX = 'SPEECH';


@Injectable()
export class SpeechStorageService {
  /**
   * Get all speeches stored in local storage.
   *
   * @return A list of speeches.
   */
  getAllSpeeches(): Speech[] {
    const speeches: Speech[] = Object.keys(localStorage)
      .filter(key => key.startsWith(SPEECH_KEY_PREFIX))
      .map(key => {
        const item = localStorage.getItem(key);

        return JSON.parse(item);
      });

    return speeches;
  }

  /**
   * Get a speech from local storage.
   *
   * @param speechId Speech id to retrieve.
   * @return The specified speech or null if not found.
   */
  getSpeechById(speechId: string): Speech | null {
    const speechKey = `${SPEECH_KEY_PREFIX}-${speechId}`;
    const item = localStorage.getItem(speechKey);
    const speech: Speech | null = JSON.parse(item);

    return speech;
  }

  /**
   * Save a speech to local storage.
   *
   * @param speech Speech to save
   * @return Stored speech id.
   */
  saveSpeech(speech: Speech): string {
    const randomId = uuid();
    const key = `${SPEECH_KEY_PREFIX}-${randomId}`;
    const item = JSON.stringify({
      ...speech,
      id: randomId
    });

    localStorage.setItem(key, item);

    return randomId;
  }
}
