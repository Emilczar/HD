import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  format
} from 'util';


import {
  Observable
} from 'rxjs/Observable';
import { of
} from 'rxjs/observable/of';
import {
  Subject
} from 'rxjs/Subject';

@Injectable()
export class DataService {

  private m1;
  private ml$  = new Subject < any >();
  private m2;
  private m2$  = new Subject < any >();


  constructor(public http: HttpClient)  {
    this.getDaneM1().subscribe((data) => {
    this.m1 = data['M1'];
      this.ml$.next(this.m1);
    });
    this.getDaneM2().subscribe((data) => {
      this.m2 = data['M2'];
      this.m2$.next(this.m2);
      });

  }
  getDaneM1() {
    return this.http.get('assets/m1.json');
  }

  getDaneM2() {
    return this.http.get('assets/m2.json');
  }
 getM1(): Observable < any > {
  return this.ml$.asObservable();
 }
 getM2(): Observable < any > {
  return this.m2$.asObservable();
 }

}
