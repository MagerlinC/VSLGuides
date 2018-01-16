import {Component, Input, OnInit} from '@angular/core';

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
  constructor() {
    this.isSelected = false;
  }

  ngOnInit() {
  }

  showContents() {
    this.isSelected = true;
  }
}
