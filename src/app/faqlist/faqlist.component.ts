import { Component, OnInit } from '@angular/core';
import {FAQ} from '../FAQ';
import {APIDataService} from '../APIDataService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-faqlist',
  templateUrl: './faqlist.component.html',
  styleUrls: ['./faqlist.component.scss']
})
export class FaqlistComponent implements OnInit {
  faqList: FAQ[];
  constructor(private dataservice: APIDataService, private router: Router) {
    this.dataservice.getFAQs().then((res) => {
      this.faqList = res;
    });
  }

  ngOnInit() {
  }

  goToAddFAQ() {
    this.router.navigate(['/new-faq']);
  }
  faqsExist() {
    return this.faqList && this.faqList.length > 0;
  }
}
