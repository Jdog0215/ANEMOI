import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityMapComponent } from './air-quality-map.component';

describe('AirQualityMapComponent', () => {
  let component: AirQualityMapComponent;
  let fixture: ComponentFixture<AirQualityMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirQualityMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirQualityMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
