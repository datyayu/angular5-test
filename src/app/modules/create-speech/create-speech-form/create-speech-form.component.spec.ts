import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpeechFormComponent } from './create-speech-form.component';

describe('CreateSpeechFormComponent', () => {
  let component: CreateSpeechFormComponent;
  let fixture: ComponentFixture<CreateSpeechFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSpeechFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpeechFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
