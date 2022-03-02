import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbekesfeestenComponent } from './ribbekesfeesten.component';

describe('RibbekesfeestenComponent', () => {
  let component: RibbekesfeestenComponent;
  let fixture: ComponentFixture<RibbekesfeestenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RibbekesfeestenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbekesfeestenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
