import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletesearchComponent } from './autocompletesearch.component';

describe('AutocompletesearchComponent', () => {
  let component: AutocompletesearchComponent;
  let fixture: ComponentFixture<AutocompletesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompletesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
