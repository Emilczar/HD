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
  public ml1$ = new Subject < any > ();
  public ml2$ = new Subject < any > ();
  public ml3$ = new Subject < any > ();
  public ml4$ = new Subject < any > ();
  public ml5$ = new Subject < any > ();

  constructor(public http: HttpClient) {
    this.getDane().subscribe((data) => {
      this.montaz = data['ML'];
      this.ml1$.next(this.makeObjektToArry(this.montaz[0]));
      this.ml2$.next(this.makeObjektToArry(this.montaz[1]));
      this.ml3$.next(this.makeObjektToArry(this.montaz[2]));
      this.ml4$.next(this.makeObjektToArry(this.montaz[3]));
      this.ml5$.next(this.makeObjektToArry(this.montaz[4]));
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
    return element;
  }

  getMl1(): Observable < any > {
    return this.ml1$.asObservable();
  }
  getMl2(): Observable < any > {
    return this.ml2$.asObservable();
  }
  getMl3(): Observable < any > {
    return this.ml3$.asObservable();
  }
  getMl4(): Observable < any > {
    return this.ml4$.asObservable();
  }
  getMl5(): Observable < any > {
    return this.ml5$.asObservable();
  }

}
