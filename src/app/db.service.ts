
import {
  Injectable
} from '@angular/core';
import {
  DataService
} from './data.service';



// serwis nie uzywany


@Injectable()
export class DbService {
  private baza =  new Array();
  constructor() {

  }

  saveDB(db) {
    this.baza.push(...db);
  }

  getDB() {
    return this.baza;
  }
}
