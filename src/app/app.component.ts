import {Component, Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {APIDataService} from './APIDataService';
import {Guide} from './Guide';
import {Observable} from 'rxjs/Observable';
import {any} from 'codelyzer/util/function';
import {state} from '@angular/core/src/animation/dsl';
import {GuidesComponent} from './guides/guides.component';
import {GuideFullViewComponent} from './guide-full-view/guide-full-view.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VSLGuides';
  events = [];
  constructor(private dataService: APIDataService, private http: Http, private router: Router) {
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


