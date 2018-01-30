import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {DataService} from './DataService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VSLGuides';
  events = [];
  constructor(private dataService: DataService, private http: Http, private router: Router) {
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
  postFAQ(question: string, answer: string) {
    this.dataService.postFAQ(question, answer);
  }
  postGuide(title: string, description: string, imgurl: string) {
    this.dataService.postGuide(title, description, imgurl);
  }
  deleteGuide(title: string, description: string, imgurl: string) {
    this.dataService.deleteGuide(title, description, imgurl);
  }
}
