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

  public montaz;
  public montaz_ml1;
  public montaz_ml2;
  public test = new Subject < any > ();
  constructor(public http: HttpClient) {
    this.getDane().subscribe((data) => {
      this.montaz = data['ML'];
      this.montaz_ml1 = this.makeObjektToArry(this.montaz[0]);
      // this.montaz_ml2 = this.makeObjektToArry(this.montaz[1]);
      this.test.next(this.makeObjektToArry(this.montaz[1]));
      console.log('service this.montaz_ml1: ', this.montaz_ml1);
      console.log('service this.montaz_ml2: ', this.montaz_ml2);

    });
  }

  getDane() {
    return this.http.get('assets/config.json');
  }

  makeObjektToArry(obj: Object) {
    let element;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        element = obj[key];
      }
    }
    // console.log('makeObjektToArry: ', element );
    return element;
  }

  getMontage(): Observable < any > {
    return this.test.asObservable();
  }

}
