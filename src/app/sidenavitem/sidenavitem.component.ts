import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-sidenavitem',
  templateUrl: './sidenavitem.component.html',
  styleUrls: ['./sidenavitem.component.scss']
})
export class SidenavitemComponent implements OnInit {
  @Input() title;
  @Input() iconPath;
  textColor;
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.toLowerCase().indexOf(this.title.toLowerCase()) !== -1) {
          this.textColor = '#1A9FE0';
        } else {
          this.textColor = '#000000';
        }
      }
    });
  }

  ngOnInit() {
  }
}

