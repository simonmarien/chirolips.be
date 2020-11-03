import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KetisComponent } from './ketis.component';

describe('KetisComponent', () => {
  let component: KetisComponent;
  let fixture: ComponentFixture<KetisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KetisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KetisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
