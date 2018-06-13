
import {
  Injectable
} from '@angular/core';
import { DataService } from './data.service';
import { Hdt } from './hdt';



@Injectable()
export class DbService {
  private m1 =  new Array();
  private m2 =  new Array();
  private listHDT = new Array();

  constructor(private dataDB: DataService) {
    this.getML();
  }

  saveM1(db) {
    this.m1.push(...db);
  }

  getM1() {
    return this.m1;
  }
  getM2() {
    return this.m2;
  }

  getM1id(id) {
    return this.m1[id];
  }

  getAllID(id) {
    return this.listHDT[id];
  }

  getAll() {
    return this.listHDT;
   }

  getML() {
    this.dataDB.getM1().subscribe((data) => {
      this.m1.push(...data);
      this.listHDT.push(...data);

    });

    this.dataDB.getM2().subscribe((data) => {
      this.m2.push(...data);
      this.listHDT.push(...data);

    });
  }
}
