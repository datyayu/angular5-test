import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechSearchViewComponent } from './speech-search-view.component';

describe('SpeechSearchViewComponent', () => {
  let component: SpeechSearchViewComponent;
  let fixture: ComponentFixture<SpeechSearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
