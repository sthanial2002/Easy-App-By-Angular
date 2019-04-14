import { DeviceService } from './../services/device.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.css']
})
export class SingleDeviceComponent implements OnInit {
  nameDevice: string;
  statusDevice: string;

  constructor(private deviceService: DeviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.nameDevice = this.deviceService.getDeviceById(+id).name;
    this.statusDevice = this.deviceService.getDeviceById(+id).status;
  }

  getColorDevice () {
    if (this.statusDevice === 'ON') {
      return 'green' ;
    } else {
      return 'darkred';
    }
  }

}
