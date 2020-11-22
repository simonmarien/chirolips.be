import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDatesComponent } from './display-dates.component';

describe('DisplayDatesComponent', () => {
  let component: DisplayDatesComponent;
  let fixture: ComponentFixture<DisplayDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
