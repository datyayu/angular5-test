import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechSearchResultsComponent } from './speech-search-results.component';

describe('SpeechSearchResultsComponent', () => {
  let component: SpeechSearchResultsComponent;
  let fixture: ComponentFixture<SpeechSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
