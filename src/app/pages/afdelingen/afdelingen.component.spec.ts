import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfdelingenComponent } from './afdelingen.component';

describe('AfdelingenComponent', () => {
  let component: AfdelingenComponent;
  let fixture: ComponentFixture<AfdelingenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfdelingenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfdelingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
