import { Component, OnInit } from '@angular/core';
import {APIDataService} from '../APIDataService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {
  guideList;
  pdfSrc = '../../assets/test.pdf';
  constructor(private dataservice: APIDataService, private router: Router) {
    this.dataservice.getGuides().then((res) => {
      this.guideList = res;
    });
  }

  ngOnInit() {
  }


  goToAddGuide() {
    this.router.navigate(['/new-guide']);
  }
  guidesExist() {
    return this.guideList && this.guideList.length > 0;
  }
}
