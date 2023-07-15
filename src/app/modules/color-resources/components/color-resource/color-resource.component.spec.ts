import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorResourceComponent } from './color-resource.component';

describe('ColorResourceComponent', () => {
  let component: ColorResourceComponent;
  let fixture: ComponentFixture<ColorResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
