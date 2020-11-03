import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedetjesComponent } from './vedetjes.component';

describe('VedetjesComponent', () => {
  let component: VedetjesComponent;
  let fixture: ComponentFixture<VedetjesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VedetjesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VedetjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
