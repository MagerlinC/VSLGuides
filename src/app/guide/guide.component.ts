import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  @Input() id;
  @Input() title;
  @Input() description;
  @Input() imgurl;
  constructor() { }

  ngOnInit() {
  }

}
