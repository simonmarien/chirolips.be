import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeelclubComponent } from './speelclub.component';

describe('SpeelclubComponent', () => {
  let component: SpeelclubComponent;
  let fixture: ComponentFixture<SpeelclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeelclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeelclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
