import { EditUserComponent } from './edit-user/edit-user.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleDeviceComponent } from './single-device/single-device.component';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { Error404Component } from './error404/error404.component';

import { AuthGuardService } from './services/auth-guard.service';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'devices',  component: DeviceViewComponent },
  { path: 'devices/:id', canActivate: [AuthGuardService], component: SingleDeviceComponent },
  { path: 'create-device', canActivate: [AuthGuardService], component: EditDeviceComponent },
  { path: 'users',  component: UserListComponent },
  { path: 'users/:id', canActivate: [AuthGuardService], component: SingleDeviceComponent },
  { path: 'create-user', canActivate: [AuthGuardService], component: EditUserComponent },
  { path: 'auth/signin', component: AuthComponent },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: Error404Component },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
