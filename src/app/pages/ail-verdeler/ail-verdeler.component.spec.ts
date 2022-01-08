import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilVerdelerComponent } from './ail-verdeler.component';

describe('AilVerdelerComponent', () => {
  let component: AilVerdelerComponent;
  let fixture: ComponentFixture<AilVerdelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AilVerdelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AilVerdelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
