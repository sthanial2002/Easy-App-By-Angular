import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-devicecomponent',
  templateUrl: './devicecomponent.component.html',
  styleUrls: ['./devicecomponent.component.css']
})
export class DevicecomponentComponent implements OnInit {

  @Input() id: number;
  @Input() deviceName: string;
  @Input() deviceStatus: string;
  @Input() indexOfDevice: number;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.deviceStatus;
  }



  oneLightUp() {
    this.deviceService.LightUp(this.indexOfDevice);
  }

  oneLightDown() {
    this.deviceService.LightDown(this.indexOfDevice);
  }

  color() {
    if (this.deviceStatus === 'ON') {
      return 'green';
    } else if (this.deviceStatus === 'OFF') {
      return 'red';
    }
  }


}
