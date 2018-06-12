import {Component, Inject, Input, OnInit} from '@angular/core';
import {APIDataService} from '../APIDataService';
import {Router} from '@angular/router';
import {AddItemDialogComponent} from '../add-item-dialog/add-item-dialog.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ConfirmDeletionDialogComponent} from '../confirm-deletion-dialog/confirm-deletion-dialog.component';
import {animate, keyframes, transition, trigger} from '@angular/animations';
import * as kf from '../keyframes';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutRight', animate(800, keyframes(kf.slideOutRight)))
    ])
  ]
})
export class GuideComponent implements OnInit {
  @Input() id;
  @Input() title;
  @Input() description;
  @Input() imgurl;
  animationState: string;
  editable = false;
  shouldHide = false;
  constructor(private dataService: APIDataService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  startAnimation(state) {
    if (!this.router.url.includes(this.id)) {
      if (!this.animationState) {
        this.animationState = state;
      }
    }
  }
  resetAnimationState() {
    if (this.animationState) {
      this.animationState = '';
      // We only use animations for deletions, hacky way to wait for animation to be done.
      this.openDeleteConfirmationDiallog();
    }
  }

  updateGuide(newTitle: string, newDescription: string) {
    if (this.validUpdate(newTitle, newDescription)) {
      this.dataService.updateGuide(this.id, newTitle, newDescription);
      this.title = newTitle;
      this.description = newDescription;
      this.editable = false;
    } else {
      (console.log('Empty update requested'));
    }
  }
  validUpdate(newTitle, newDescription) {
    return (newTitle && newDescription && (this.title !== newTitle || this.description !== newDescription));
  }
  async deleteGuide() {
    this.shouldHide = true;
    await this.dataService.deleteGuide(this.id);
  }
  goToFullView() {
    this.router.navigate(['/guides/' + this.id]);
  }
  goToAddGuideItem() {
    this.router.navigate(['/guides/' + this.id + '/new-guide']);
  }
  /*
  openAddItemDialog() {
    const parentTitle = this.title;
    let pdf: File;
    let title;


    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      data: { ParentGuide: parentTitle, Source: pdf, Title: title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result.Source);
        pdf = result.Source;
        title = result.Title;
        this.dataService.postGuideItem(title, pdf, this.id);
        this.router.navigate(['/guides/' + this.id]);
      }
    });
  } */
  openDeleteConfirmationDiallog() {
    const dialogRef = this.dialog.open(ConfirmDeletionDialogComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.shouldHide = true;
        this.deleteGuide();
        this.router.navigate(['/guides/']);
      }
    });
  }
}


