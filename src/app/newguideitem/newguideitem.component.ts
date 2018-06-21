import { Component, OnInit } from '@angular/core';
import {APIDataService} from '../APIDataService';
import {ActivatedRoute, Router} from '@angular/router';
import {Guide} from '../Guide';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-newguideitem',
  templateUrl: './newguideitem.component.html',
  styleUrls: ['./newguideitem.component.scss']
})
export class NewguideitemComponent implements OnInit {
  pdf: File;
  parentGuide: Guide;
  private apiUrl = 'http://localhost:49918/api/guideitem/';
  public uploader: FileUploader = new FileUploader({url: this.apiUrl});
  constructor(private route: ActivatedRoute, private dataService: APIDataService, private router: Router) {
    this.parentGuide = Guide.fromJson(JSON.parse((this.route.snapshot.data['guide']._body)));
    console.log('PARENT IS: ');
    console.log(this.parentGuide);
  }

  ngOnInit() {
  }

  addNewGuideItem(title: string, pdf: File, parentGuide: number) {
    this.dataService.postGuideItem(title, pdf, parentGuide);
    // this.goBack();
  }
  goBack() {
    this.router.navigate(['/guides/' + this.parentGuide.id]);
  }

  fileChange(e) {
    const fileList: FileList = e.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      console.log(file);
      this.pdf = file;
    }
  }
  submitGuideItem(title: string) {
    // this.uploader.uploadAll();
    this.dataService.postGuideItem(title, this.pdf, this.parentGuide.id);
    this.goBack();
    // this.dataService.saveGuideItemFileRef(title, this.pdf.name, this.parentGuide.id);
  }
}
