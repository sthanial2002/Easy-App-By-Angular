import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDeviceComponent } from './single-device.component';

describe('SingleDeviceComponent', () => {
  let component: SingleDeviceComponent;
  let fixture: ComponentFixture<SingleDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
