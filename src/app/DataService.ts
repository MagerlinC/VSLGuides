import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Guide} from './Guide';
import {FAQ} from './FAQ';

@Injectable()
export class DataService {
  private apiUrl = 'http://localhost:49918/api';

  constructor(private http: Http) {
  }
  getGuides() {
     return this.http.get(this.apiUrl + '/guide').toPromise().then((res) => {
       const guides: Guide[] = [];
       for (const guideJson of res.json()) {
         guides.push(Guide.fromJson(guideJson));
       }
       return guides;
    });
  }
  getFAQs() {
     return this.http.get(this.apiUrl + '/FAQ').toPromise().then((res) => {
       const faqs: FAQ[] = [];
       for (const guideJson of res.json()) {
         faqs.push(FAQ.fromJson(guideJson));
       }
       return faqs;
    });
  }
  postFAQ(question: string, answer: string) {
    const faq = {question: question, answer: answer};
    return this.http.post(this.apiUrl + '/FAQ', faq).toPromise().then( (res) => {
      console.log(res);
    },
      (err) => {
      console.log('Failed to post FAQ');
      });
  }
  postGuide(title: string, description: string, imgurl: string) {
  const guide = {title: title, description: description, imgurl: imgurl};
  return this.http.post(this.apiUrl + '/guide', guide).toPromise().then( (res) => {
    console.log(res);
  },
    (err) => {
    console.log('Failed to post Guide');
    });
  }
  deleteGuide(title: string, description: string, imgurl: string) {
    const guide = {title: title, description: description, imgurl: imgurl};
    // Delete by id?
    /*return this.http.delete(this.apiUrl + '/guide', guide).toPromise().then( (res) => {
    console.log(res);
  },
    (err) => {
    console.log('Failed to post Guide');
    });*/
  }
}

