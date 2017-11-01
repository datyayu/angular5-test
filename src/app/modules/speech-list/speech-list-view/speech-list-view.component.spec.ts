import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechListViewComponent } from './speech-list-view.component';

describe('SpeechListViewComponent', () => {
  let component: SpeechListViewComponent;
  let fixture: ComponentFixture<SpeechListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
