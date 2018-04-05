import {Injectable, NgZone} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Guide} from './Guide';
import {FAQ} from './FAQ';
import {GuideItem} from './GuideItem';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class DataService {
  private apiUrl = 'http://localhost:49918/api';
  constructor(private http: Http, private zone: NgZone) {
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
  getGuideItems() {
    const guideItems: GuideItem[] = [];
    return this.http.get(this.apiUrl + '/guideitem').toPromise().then((res) => {
      for (const guideItemJson of res.json()) {
        console.log('##############');
        console.log(GuideItem.fromJson(guideItemJson));
        guideItems.push(GuideItem.fromJson(guideItemJson));
      }
      return guideItems;
    });

  }
  getGuide(id: number): Observable<Response> {
    return this.http.get(this.apiUrl + '/guide/' + id);
  }
  async getGuideItemsForGuide(id: number): Promise<GuideItem[]> {
    const guideItems: GuideItem[] = [];
    let allguideitems: GuideItem[] = [];
    await this.getGuideItems().then((res) => {
      allguideitems = (res);
    });
    for (const guideItem of allguideitems) {
     if (guideItem.GuideDTORefId === id) {
       guideItems.push(guideItem);
     }
   }
   return guideItems;
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
    console.log('Posting guide: ' + title + description + imgurl);
    const guide = {title: title, description: description, imgurl: imgurl};
    return this.http.post(this.apiUrl + '/guide', guide).toPromise().then( (res) => {
    console.log(res);
  },
    (err) => {
    console.log('Failed to post Guide');
    });
  }
  postGuideItem(title: string, src: string, parentGuide: number) {
    const guideItem  = {title: title, guideUrl: src, GuideDTORefId: parentGuide};
    return this.http.post(this.apiUrl + '/guideitem', guideItem).toPromise().then( (res) => {
      console.log(res);
    },
      (err) => {
        console.log('Failed to post GuideItem');
      });
  }
  updateGuide(oldGuideId: number, newTitle: string, newDescription: string) {
    console.log('Updating guide with id: ' + oldGuideId);
    const guideItem = {GuideDTOId: oldGuideId, title: newTitle, description: newDescription};
    return this.http.put(this.apiUrl + '/guide/', guideItem).toPromise().then( (res) => {
      console.log(res);
    });
  }
  deleteGuide(id: number) {
    console.log('Deleting guide with id: ' + id);
    // Delete by id
    return this.http.delete(this.apiUrl + '/guide/' + id).toPromise().then( (res) => {
      console.log(res);
    });
  }
  deleteGuideItem(id: number) {
    console.log('Deleting guide with id: ' + id);
    // Delete by id
    return this.http.delete(this.apiUrl + '/guideitem/' + id).toPromise().then( (res) => {
      console.log(res);
    });
  }

  deleteFAQ(id: number) {
    // Delete by id
    return this.http.delete(this.apiUrl + '/FAQ/' + id).toPromise().then( (res) => {
    console.log(res);
  },
    (err) => {
    console.log('Failed to delete FAQ: ' + err);
    });
  }
}

