import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilUitlegComponent } from './ail-uitleg.component';

describe('AilUitlegComponent', () => {
  let component: AilUitlegComponent;
  let fixture: ComponentFixture<AilUitlegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AilUitlegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AilUitlegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
