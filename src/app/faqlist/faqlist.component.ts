import { Component, OnInit } from '@angular/core';
import {FAQ} from '../FAQ';
import {DataService} from '../DataService';

@Component({
  selector: 'app-faqlist',
  templateUrl: './faqlist.component.html',
  styleUrls: ['./faqlist.component.scss']
})
export class FaqlistComponent implements OnInit {
  faqList: FAQ[];
  constructor(private dataservice: DataService) {
    this.dataservice.getFAQs().then((res) => {
      this.faqList = res;
    });
  }

  ngOnInit() {
  }

}
