
import {
  Injectable
} from '@angular/core';
import {
  DataService
} from './data.service';



@Injectable()
export class DbService {

  public hdtDB;

  constructor(public db: DataService) {

    this.db.getDane().subscribe(data => {
      this.hdtDB =  data;
    });
  }


  public getMontage() {
return this.hdtDB.montaz;
  }
  getPaintShop() {
    return this.hdtDB.lakiernia;
  }

  getWelding() {
    return this.hdtDB.spawalnia;
  }
}
