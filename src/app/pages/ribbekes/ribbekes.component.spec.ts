import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbekesComponent } from './ribbekes.component';

describe('RibbekesComponent', () => {
  let component: RibbekesComponent;
  let fixture: ComponentFixture<RibbekesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RibbekesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbekesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
