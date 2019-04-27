import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  deviceSubject = new Subject<any[]>();

  private devices: any[] = [
    { id: 1, name: 'Télévision', status: 'ON' },
    { id: 1, name: 'Réfrigerateur', status: 'OFF' },
    { id: 1, name: 'Décodeur', status: 'ON' },
    { id: 1, name: 'DVD', status: 'OFF' },
    { id: 1, name: 'Ordinateur', status: 'ON' },
    { id: 1, name: 'Imprimante', status: 'ON' }
  ];

  constructor(private httpClient: HttpClient) {
  //    this.devices = this.getDevicesFromServer();
  }

  getDevicesFromServer() {
    this.httpClient
      .get<any[]>('https://http-client-demo-angular.firebaseio.com/devices.json')
      .subscribe(
        (response) => {
          this.devices = response;
          this.emitDeviceSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        });
    return this.devices;
  }

  emitDeviceSubject() {
    this.deviceSubject.next(this.devices.slice());
  }

  getDeviceById(id: number) {
    const device = this.devices.find(
      (deviceObject) => {
        return deviceObject.id === id;
      }
    );
    return device;
  }

  addDevice(name, status) {
    const deviceObject = {
      id: 0,
      name: '',
      status: ''
    };
    deviceObject.name = name;
    deviceObject.status = status;
    deviceObject.id = this.devices[this.devices.length - 1].id + 1;

    this.devices.push(deviceObject);
    this.emitDeviceSubject();
  }



  saveDevicesToServerFirebase() {
    this.httpClient
      .put('https://http-client-demo-angular.firebaseio.com/devices.json', this.devices).subscribe(
        () => {
          console.log('Sauvegarde effectué');
        },
        (error) => {
          console.log('Erreur ' + error);
        }
      );
  }

  allLightUp() {
    for (const device of this.devices) {
      device.status = 'ON';
    }
    this.emitDeviceSubject();
  }

  LightUp(index) {
    this.devices[index].status = 'ON';
    this.emitDeviceSubject();

  }

  allLightDown() {
    for (const device of this.devices) {
      device.status = 'OFF';
    }
    this.emitDeviceSubject();

  }

  LightDown(index) {
    this.devices[index].status = 'OFF';
    this.emitDeviceSubject();

  }


}
