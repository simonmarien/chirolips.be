import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKalenderComponent } from './admin-kalender.component';

describe('AdminKalenderComponent', () => {
  let component: AdminKalenderComponent;
  let fixture: ComponentFixture<AdminKalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminKalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
