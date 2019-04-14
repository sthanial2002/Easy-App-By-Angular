import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FlashMessagesModule } from 'angular2-flash-messages';



import { DeviceService } from './services/device.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';


import { DevicecomponentComponent } from './devicecomponent/devicecomponent.component';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    DevicecomponentComponent,
    AuthComponent,
    DeviceViewComponent,
    SingleDeviceComponent,
    Error404Component,
    HomeComponent,
    EditDeviceComponent,
    NavbarComponent,
    UserListComponent,
    SingleUserComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    DeviceService,
    AuthService,
    AuthGuardService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
