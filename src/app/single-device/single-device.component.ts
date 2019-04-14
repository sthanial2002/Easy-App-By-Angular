import { DeviceService } from './../services/device.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.css']
})
export class SingleDeviceComponent implements OnInit {
  name = 'device';
  status = 'statut';

  constructor(private deviceService: DeviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.name = this.deviceService.getDeviceById(+id).name;
    this.status = this.deviceService.getDeviceById(+id).status;
  }

  getColorDevice () {
    if (this.status === 'ON') {
      return 'green' ;
    } else {
      return 'darkred';
    }
  }

}
