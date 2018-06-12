import {Injectable, NgZone} from '@angular/core';
import {Http, RequestOptions, Response, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';
import {Guide} from './Guide';
import {FAQ} from './FAQ';
import {GuideItem} from './GuideItem';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class APIDataService {
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
  getGuide(id: number): Observable<Response> {
    return this.http.get(this.apiUrl + '/guide/' + id);
  }

  async getGuideItemsForGuide(id: number)  {
    const guideItems = [];
    return this.http.get(this.apiUrl + '/guideitem/' + id, {responseType: ResponseContentType.Blob}).toPromise().then((res) => {
      console.log(res.blob());
      return new Blob([res.blob()], {type: 'application/pdf'});
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
    console.log('Posting guide: ' + title + description + imgurl);
    const guide = {title: title, description: description, imgurl: imgurl};
    return this.http.post(this.apiUrl + '/guide', guide).toPromise().then( (res) => {
        console.log(res);
      },
      (err) => {
        console.log('Failed to post Guide');
      });
  }
  updateGuide(oldGuideId: number, newTitle: string, newDescription: string) {
    console.log('Updating guide with id: ' + oldGuideId);
    const guideItem = {GuideDTOId: oldGuideId, title: newTitle, description: newDescription};
    return this.http.put(this.apiUrl + '/guide/', guideItem).toPromise().then( (res) => {
      console.log(res);
    });
  }
  async deleteGuide(id: number) {
    console.log('Deleting guide with id: ' + id);
    // Delete by id
    return await this.http.delete(this.apiUrl + '/guide/' + id).toPromise().then( (res) => {
      console.log(res);
    });
  }

  postGuideItem(title: string, pdf: File, parent: number) {
    const formData = new FormData();

    formData.append('title', pdf.name);
    formData.append('parent', parent.toString());
    formData.append('pdf', pdf);

    console.log('FORMDATA IS: ');
    console.log(formData);
    const request = new XMLHttpRequest();
    request.open('POST', this.apiUrl + '/guideItem' + '?title=' + pdf.name + '&parent=' + parent);
    request.send(formData);
    /*
    fetch(this.apiUrl + '/guideItem' + '?title=' + title + '&parent=' + parent, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response)); */
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

