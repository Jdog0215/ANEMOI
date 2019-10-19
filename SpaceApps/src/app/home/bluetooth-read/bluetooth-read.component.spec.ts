import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluetoothReadComponent } from './bluetooth-read.component';

describe('BluetoothReadComponent', () => {
  let component: BluetoothReadComponent;
  let fixture: ComponentFixture<BluetoothReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluetoothReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluetoothReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
