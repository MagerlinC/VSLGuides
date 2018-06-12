import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-mobile-nav-icon',
  templateUrl: './mobile-nav-icon.component.html',
  styleUrls: ['./mobile-nav-icon.component.scss']
})
export class MobileNavIconComponent implements OnInit {
  @Input() iconUrl;
  @Input() selectorName;
  opacity;
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf(this.selectorName) !== -1) {
          this.opacity = 1;
        } else {
          this.opacity = 0.8;
        }
      }
    });
  }

  ngOnInit() {
  }
}
