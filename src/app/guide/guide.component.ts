import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../DataService';
import {Router} from '@angular/router';

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
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  setEditable(bool: boolean) {
    this.editable = bool;
  }

  updateGuide(newTitle: string, newDescription: string) {
    this.dataService.updateGuide(this.id, newTitle, newDescription);
  }
  deleteGuide() {
    this.dataService.deleteGuide(this.id);
  }
  goToFullView() {
    this.router.navigate(['/guides/' + this.id]);
  }
}

