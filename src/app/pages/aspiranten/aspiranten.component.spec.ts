import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspirantenComponent } from './aspiranten.component';

describe('AspirantenComponent', () => {
  let component: AspirantenComponent;
  let fixture: ComponentFixture<AspirantenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspirantenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AspirantenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
