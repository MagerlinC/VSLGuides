import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {

  @Input() title;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goHome() {
    this.router.navigate( ['/guides']);
  }
  goToGuides() {
    this.router.navigate( ['/guides']);
  }
  goToFAQ() {
    this.router.navigate( ['/FAQ']);
  }
  getCurrentPage() {
    const url = this.router.url;
    if (url.indexOf('guides')) {
      return 'Guides';
    } else if (url.indexOf('faq')) {
      return 'FAQ';
    }
  }


}
