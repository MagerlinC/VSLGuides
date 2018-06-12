import {Component, Input, OnInit} from '@angular/core';
import {APIDataService} from '../APIDataService';
import {trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../keyframes';
import {ConfirmDeletionDialogComponent} from '../confirm-deletion-dialog/confirm-deletion-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-guide-item',
  templateUrl: './guide-item.component.html',
  styleUrls: ['./guide-item.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutRight', animate(800, keyframes(kf.slideOutRight)))
    ])
  ]
})
export class GuideItemComponent implements OnInit {
  @Input() title;
  @Input() id;
  @Input() pdfUrl;
  shouldHide = false;
  animationState: string;
  constructor(private dataService: APIDataService, public dialog: MatDialog) { }

  ngOnInit() {
  }
  deleteGuideItem() {
    // Wait for animation?
    this.dataService.deleteGuideItem(this.id);
    this.shouldHide = true;
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
      this.openDeleteConfirmationDialog();
    }
  }
  openDeleteConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmDeletionDialogComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteGuideItem();
      }
    });
  }
}
