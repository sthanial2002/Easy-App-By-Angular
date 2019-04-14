import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Subscription } from 'rxjs';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.css']
})
export class DeviceViewComponent implements OnInit {
  isOnOff: Boolean;
  lastUpdate: any;
  devices: any[];

  deviceSubscription: Subscription;

  constructor(private deviceService: DeviceService, private flashMessage: FlashMessagesService) {

    this.lastUpdate = new Promise(
      (resolve, reject) => {
        const date = new Date();
        setTimeout(() => {
          (resolve(date));
        }, 4000
        );
      }
    );


  }

  ngOnInit() {
    this.deviceSubscription = this.deviceService.deviceSubject.subscribe(
      (devices: any[]) => {
        this.devices = devices;
        console.log(this.devices);
      });
    this.deviceService.emitDeviceSubject();
  }


  onSave() {
    this.deviceService.saveDevicesToServerFirebase();
    this.flashMessage.show('La liste de vos appareils à été enrégistrée !', { cssClass: 'alert-danger', timeout: 5000 });
  }


  onAllLightUp() {
    this.deviceService.allLightUp();
    this.isOnOff = true;
    this.flashMessage.show('Tous vos appareils sont allumés !', { cssClass: 'alert-danger', timeout: 5000 });
  }

  onAllLightDown() {
    this.deviceService.allLightDown();
    this.isOnOff = false;
    this.flashMessage.show('Tous vos appareils sont éteints !', { cssClass: 'alert-danger', timeout: 5000 });
  }

}





