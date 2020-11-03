import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlipsComponent } from './hotlips.component';

describe('HotlipsComponent', () => {
  let component: HotlipsComponent;
  let fixture: ComponentFixture<HotlipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotlipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotlipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
