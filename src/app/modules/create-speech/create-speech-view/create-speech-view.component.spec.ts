import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpeechViewComponent } from './create-speech-view.component';

describe('CreateSpeechViewComponent', () => {
  let component: CreateSpeechViewComponent;
  let fixture: ComponentFixture<CreateSpeechViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSpeechViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpeechViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
