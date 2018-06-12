import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {APIDataService} from '../APIDataService';

@Component({
  selector: 'app-newfaq',
  templateUrl: './newfaq.component.html',
  styleUrls: ['./newfaq.component.scss']
})
export class NewfaqComponent implements OnInit {

  constructor(private dataService: APIDataService, private router: Router) { }

  ngOnInit() {
  }
  addNewFAQ(question: string, answer: string) {
    this.dataService.postFAQ(question, answer).then( (res) => {
      console.log(res);
      this.goBack();
    });
  }
  goBack() {
    this.router.navigate(['/FAQ']);
  }
}
