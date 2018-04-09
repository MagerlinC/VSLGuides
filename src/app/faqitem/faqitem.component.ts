import {Component, Input, OnInit} from '@angular/core';
import {APIDataService} from '../APIDataService';

@Component({
  selector: 'app-faqitem',
  templateUrl: './faqitem.component.html',
  styleUrls: ['./faqitem.component.scss']
})
export class FaqitemComponent implements OnInit {
  @Input() id;
  @Input() question;
  @Input() answer;
  isSelected;
  shouldHide = false;
  constructor(private dataService: APIDataService) {
    this.isSelected = false;
  }

  ngOnInit() {
  }

  showContents() {
    this.isSelected = true;
  }

  deleteFAQ() {
    this.shouldHide = true;
    this.dataService.deleteFAQ(this.id);
  }
}
