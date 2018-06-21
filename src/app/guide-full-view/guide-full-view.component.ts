import {Component, Input, OnInit} from '@angular/core';
import {Guide} from '../Guide';
import {GuideItem} from '../GuideItem';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {APIDataService} from '../APIDataService';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import {animate, keyframes, transition, trigger} from '@angular/animations';
import * as kf from '../keyframes';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-guide-full-view',
  templateUrl: './guide-full-view.component.html',
  styleUrls: ['./guide-full-view.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutRight', animate(400, keyframes(kf.slideOutRight)))
    ])
  ]
})
export class GuideFullViewComponent implements OnInit {
  animationState = '';
  parent: Guide;
  guideItems: GuideItem[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private dataService: APIDataService, public dialog: MatDialog) {
    this.parent = Guide.fromJson(JSON.parse((this.route.snapshot.data['guide']._body)));
    this.getGuideItems();
  }
  ngOnInit() {

  }
  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }
  resetAnimationState() {
    if (this.animationState) {
      this.animationState = '';
      // We only use animations for deletions, hacky way to wait for animation to be done.
      this.router.navigate(['/guides']);
    }
  }

  // Get all guideItems belonging to this guide
  getGuideItems() {
    this.dataService.getGuideItems().then((res) => {
      for (const gi of res) {
        if (gi.GuideDTORefId === this.parent.id) {
          this.guideItems.push(gi);
        }
      }
    });
  }
}
