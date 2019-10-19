import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistDataComponent } from './hist-data.component';

describe('HistDataComponent', () => {
  let component: HistDataComponent;
  let fixture: ComponentFixture<HistDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
