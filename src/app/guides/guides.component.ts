import { Component, OnInit } from '@angular/core';
import {DataService} from '../DataService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {
  guideList;
  constructor(private dataservice: DataService, private router: Router) {
    this.dataservice.getGuides().then((res) => {
      this.guideList = res;
    });
  }

  ngOnInit() {
  }


  updateGuides() {
    this.dataservice.getGuides().then((res) => {
      this.guideList = res;
    });
  }

  goToAddGuide() {
    this.router.navigate(['/new-guide']);
  }
}
