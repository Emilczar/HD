import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { DbService } from '../../db.service';
import { ShowService } from '../../service/show.service';


declare const $: any;
@Component({
  selector: 'app-montage-list',
  templateUrl: './montage-list.component.html',
  styleUrls: ['./montage-list.component.scss']
})
export class MontageListComponent implements OnInit {

  dataMontage = new Array();
  imageMontage = 'assets/m2.jpg';



  constructor(private db: DbService, private show: ShowService) {

  }

  ngOnInit() {
    this.dataMontage = this.db.getM1();

  }

  tooltip_title(name, takt, status) {
    return `nazwa: ${name}<br>takt: ${takt}<br>status: ${status}`;
  }

  getTooltip(name) {
    this.show.getTooltip(name);
  }


  // position setting for hd

 // przenesc do serwisu !!!!!
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
        case '9':
        return {
          left: '1050px',
          top: '163px'
        };
        case '10':
        return {
          left: '1050px',
          top: '200px'
        };
        case '11':
        return {
          left: '1050px',
          top: '100px'
        };
      default:
        console.log('brak taktu');
    }
  }

}
