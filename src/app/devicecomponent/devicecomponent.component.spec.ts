import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicecomponentComponent } from './devicecomponent.component';

describe('DevicecomponentComponent', () => {
  let component: DevicecomponentComponent;
  let fixture: ComponentFixture<DevicecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
