import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RakwisComponent } from './rakwis.component';

describe('RakwisComponent', () => {
  let component: RakwisComponent;
  let fixture: ComponentFixture<RakwisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RakwisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RakwisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
