import { DbService } from '../db.service';
import {
  Component,
  OnInit
} from '@angular/core';

import {
  DataService
} from '../data.service';
import {
  DomSanitizer
} from '@angular/platform-browser';


declare const $: any;



@Component({
  selector: 'app-montage',
  templateUrl: './montage.component.html',
  styleUrls: ['./montage.component.scss'],

})
export class MontageComponent implements OnInit {
  public ML1;
  public ML2;
  public ML3;
  public ML4;
  public ML5;
  dataMontage = new Array();
  db2: DataService;

  imageMontage = 'assets/m2.jpg';


  constructor(public db: DataService, public baza: DbService) {

  }

  ngOnInit() {
    /* this.getMl1();
    this.getMl2();
    this.getMl3();
    this.getMl4();
    this.getMl5(); */

// new concepcion
    this.getML();
    console.log('dane do sprawdzenia ', this.dataMontage );



    $(function () {
      $('[class="hd1"]').tooltip();
    });

  }
  tooltip_title(name, takt, status) {
    return `nazwa: ${name}<br>takt: ${takt}<br>status: ${status}`;
  }

  getTooltip() {
    $('[class="hd1"]').tooltip();
  }


// new concepcion
  getML() {
    this.db.getML().subscribe((data) => {
      this.dataMontage.push(...data);
      this.baza.saveDB(data);
      console.log('this.dataMontage',  this.dataMontage);
    });
  }

// loading the equipment
  /* getMl1() {
    this.db.getMl1().subscribe((data) => {

      this.dataMontage.push(...data);
      this.baza.saveDB(data);
      console.log('this.ML1 ', this.ML1);
    });
  }

  getMl2() {
    this.db.getMl2().subscribe((data) => {
     this.dataMontage.push(...data);
     this.baza.saveDB(data);
      console.log('this.ML2 ', this.ML2);
    });
  }
  getMl3() {
    this.db.getMl3().subscribe((data) => {
     this.dataMontage.push(...data);
     this.baza.saveDB(data);
      console.log('this.ML3 ', this.ML3);
    });
  }
  getMl4() {
    this.db.getMl4().subscribe((data) => {
     this.dataMontage.push(...data);
     this.baza.saveDB(data);
      console.log('this.ML4 ', this.ML4);
    });
  }
  getMl5() {
    this.db.getMl5().subscribe((data) => {
     this.dataMontage.push(...data);
     this.baza.saveDB(data);
      console.log('this.ML5 ', this.ML5);
      console.log('dataMontage ', this.dataMontage);
    });
  } */



  // position setting for hd
  getCss(key) {
    switch (key) {
      case '1':
        return {
          left: '100x'
        };
      case '3':
        return {
          left: '200px'
        };
      case '2':
        return {
          left: '500px'
        };
      case '4':
        return {
          left: '600px'
        };
        case '5':
        return {
          left: '700px'
        };
        case '6':
        return {
          left: '900px'
        };
        case '7':
        return {
          left: '650px'
        };
        case '8':
        return {
          left: '1050px',
          top: '63px'
        };
      default:
        console.log('brak taktu');
    }
  }

  getID() {
    console.log('getDB ', this.baza.getDB() );
  }

}
