import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorResourcesComponent } from './color-resources.component';

describe('ColorResourcesComponent', () => {
  let component: ColorResourcesComponent;
  let fixture: ComponentFixture<ColorResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
