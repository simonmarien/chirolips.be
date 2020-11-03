import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitosComponent } from './titos.component';

describe('TitosComponent', () => {
  let component: TitosComponent;
  let fixture: ComponentFixture<TitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
