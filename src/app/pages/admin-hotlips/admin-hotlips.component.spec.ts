import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHotlipsComponent } from './admin-hotlips.component';

describe('AdminHotlipsComponent', () => {
  let component: AdminHotlipsComponent;
  let fixture: ComponentFixture<AdminHotlipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHotlipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHotlipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
