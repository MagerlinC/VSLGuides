import {Component, Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VSLGuides';
  events = [];
  items;
  constructor(private router: Router) {
  }

  goHome() {
    this.router.navigate(['/home']);
  }
  goToGuides() {
    this.router.navigate(['/guides']);
  }
  goToFAQ() {
    this.router.navigate(['/FAQ']);
  }
}
