import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Speech } from '../../../types';


@Component({
  selector: 'speech-form',
  templateUrl: './speech-form.component.html',
  styleUrls: ['./speech-form.component.css']
})
export class SpeechFormComponent {
  @Input() speech: Speech;
  @Input() isNew: boolean = true;

  @Output() save: EventEmitter<Speech> = new EventEmitter<Speech>();
  @Output() delete: EventEmitter<Speech> = new EventEmitter<Speech>();
  @Output() share: EventEmitter<void> = new EventEmitter<void>();

  modalShareEmail: string = '';

  constructor(
    private modalService: NgbModal
  ) {}



  openModal(content) {
    this.modalService.open(content, { beforeDismiss: this.onShare });
  }

  onSave() {
    this.save.emit(this.speech);
    console.log(this.speech);
  }

  onDelete() {
    this.delete.emit(this.speech);
  }

  onShare = () => {
    this.share.emit();

    return true;
  }
}
