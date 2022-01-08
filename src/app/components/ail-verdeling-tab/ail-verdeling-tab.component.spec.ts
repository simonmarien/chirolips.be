import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilVerdelingTabComponent } from './ail-verdeling-tab.component';

describe('AilVerdelingTabComponent', () => {
  let component: AilVerdelingTabComponent;
  let fixture: ComponentFixture<AilVerdelingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AilVerdelingTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AilVerdelingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
