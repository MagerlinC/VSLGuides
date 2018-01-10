import { Component, OnInit } from '@angular/core';
import {Guide} from '../Guide';
import {DataService} from '../DataService';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {
  guideList: Guide[];
  constructor(private dataservice: DataService) {
    this.dataservice.getGuides().then((res) => {
      this.guideList = res;
    });
  }

  ngOnInit() {
  }

}
