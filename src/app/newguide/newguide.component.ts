import { Component, OnInit } from '@angular/core';
import {APIDataService} from '../APIDataService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newguide',
  templateUrl: './newguide.component.html',
  styleUrls: ['./newguide.component.scss']
})
export class NewguideComponent implements OnInit {

  constructor(private dataService: APIDataService, private router: Router) {
  }

  ngOnInit() {
  }

  addNewGuide(title: string, description: string, imgurl: string) {
    this.dataService.postGuide(title, description, imgurl).then( (res) => {
      console.log(res);
      this.goBack();
    });
  }

  goBack() {
    this.router.navigate(['/guides']);
  }


}
