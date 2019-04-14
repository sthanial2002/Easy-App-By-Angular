import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      firstname: 'Maurel',
      lastname: 'OUSSOU',
      email: 'micronet@consultant.com',
      drinkPreference: 'Coca',
      hobbies: [
        'Coder',
        'Déguster du café'
      ],
    },
    {
      firstname: 'Pharell',
      lastname: 'OUSSOU',
      email: 'pharell@consultant.com',
      drinkPreference: 'Pepsi',
      hobbies: [
        'Sport',
        'Voyage',
        'Technologie'
      ],
    },
    {
      firstname: 'Georges',
      lastname: 'FAYOMI',
      email: 'toyins@gmail.com',
      drinkPreference: 'Pepsi',
      hobbies: [
        'Spiritualité',
        'Voyage',
      ],
    },
  ];
  userSubject = new Subject<User[]>();

  constructor() { }


  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }


}
