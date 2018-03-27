import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import {Guide} from './Guide';
import {DataService} from './DataService';


@Injectable()
export class GuideResolver implements Resolve<any> {
  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    return (this.dataService.getGuide(parseInt(id, 10)).toPromise().then((res) => {
      console.log('################ RESOLVED TO: ' + res.json().title);
      return res;
    }));
  }
}
