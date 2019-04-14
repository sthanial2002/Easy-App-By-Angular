import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  secondes: number;
  countSubcription: Subscription;

  constructor() { }

  ngOnInit() {
    const count = interval(1000);
    this.countSubcription = count.subscribe(
      (value) => {
        this.secondes = value;
      }, (error) => {
        console.log('Une erreur est survenue');
      }, () => {
        console.log('Objet complèté');
      });
  }

  ngOnDestroy() {
    this.countSubcription.unsubscribe();
  }

}
