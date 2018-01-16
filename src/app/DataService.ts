import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Guide} from './Guide';
import {FAQ} from './FAQ';

@Injectable()
export class DataService {
  private apiUrl = 'http://localhost:49918/api/';

  constructor(private http: Http) {
  }
  getGuides() {
     return this.http.get(this.apiUrl + '/guides').toPromise().then((res) => {
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
}

