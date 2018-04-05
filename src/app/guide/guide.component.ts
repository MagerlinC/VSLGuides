import {Component, Inject, Input, OnInit} from '@angular/core';
import {DataService} from '../DataService';
import {Router} from '@angular/router';
import {AddItemDialogComponent} from '../add-item-dialog/add-item-dialog.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

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
  constructor(private dataService: DataService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }


  updateGuide(newTitle: string, newDescription: string) {
    this.dataService.updateGuide(this.id, newTitle, newDescription);
    this.editable = false;
  }
  deleteGuide() {
    this.shouldHide = true;
    this.dataService.deleteGuide(this.id);
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
        this.router.navigate(['/guides/' + this.id]);
      }
    });
  }
}


