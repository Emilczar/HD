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
  db2: DataService;

  imageMontage = 'assets/m2.jpg';


  constructor(public db: DataService) {}


  ngOnInit() {
    this.ML1 = this.getMl1();
    this.ML2 = this.getMl2();
    this.ML3 = this.getMl3();
    this.ML4 = this.getMl4();
    this.ML5 = this.getMl5();

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

  // loading the equipment
  getMl1() {
    this.db.getMl1().subscribe((data) => {
      this.ML1 = data;
      console.log('this.ML1 ', this.ML1);
    });
  }

  getMl2() {
    this.db.getMl2().subscribe((data) => {
      this.ML2 = data;
      console.log('this.ML2 ', this.ML2);
    });
  }
  getMl3() {
    this.db.getMl3().subscribe((data) => {
      this.ML3 = data;
      console.log('this.ML3 ', this.ML3);
    });
  }
  getMl4() {
    this.db.getMl4().subscribe((data) => {
      this.ML4 = data;
      console.log('this.ML4 ', this.ML4);
    });
  }
  getMl5() {
    this.db.getMl5().subscribe((data) => {
      this.ML5 = data;
      console.log('this.ML5 ', this.ML5);
    });
  }



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
          left: '800px'
        };
      default:
        console.log('brak taktu');
    }
  }


}
