import {Component, Inject, Input, OnInit} from '@angular/core';
import {APIDataService} from '../APIDataService';
import {Router} from '@angular/router';
import {AddItemDialogComponent} from '../add-item-dialog/add-item-dialog.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ConfirmDeletionDialogComponent} from '../confirm-deletion-dialog/confirm-deletion-dialog.component';

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

  editable = false;
  shouldHide = false;
  constructor(private dataService: APIDataService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
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
  openAddItemDialog() {
    const parentTitle = this.title;
    let pdfsrc;
    let title;


    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      data: { ParentGuide: parentTitle, Source: pdfsrc, Title: title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        pdfsrc = result.Source;
        title = result.Title;
        this.dataService.postGuideItem(title, pdfsrc, this.id);
      }
    });
  }
  openDeleteConfirmationDiallog() {
    const dialogRef = this.dialog.open(ConfirmDeletionDialogComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteGuide();
        this.router.navigate(['/guides/']);
      }
    });
  }
}


