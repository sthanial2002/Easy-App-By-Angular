import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;

  constructor() { }

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            resolve(true);
            this.isAuth = true ;
          }, 4000
        );
      }
    );
  }

  signOut(){
    this.isAuth = false ;
  }
}
