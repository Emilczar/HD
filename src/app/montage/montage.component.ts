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

@Component({
  selector: 'app-montage',
  templateUrl: './montage.component.html',
  styleUrls: ['./montage.component.scss'],

})
export class MontageComponent implements OnInit {
  public hdt;
  public dane;
  public ML1;
  public ML2;
  db2: DataService;

  sanitizer: DomSanitizer;
  test = 'green';

  imageMontage = 'assets/m2.jpg';

  constructor(public db: DataService) {


   /*  // pobranie danych z pliku json z Obiekty "ML"
    this.db.getDane().subscribe(data => {
      this.hdt = data['ML'];
      console.log('data1: ', this.hdt);
      const ml1: Array < Object > = this.hdt[0]; // przypisanie do zmienne ML1 dane z tablicy hdt[0]
      // przepisanie danych z Obiektu do tablicy
      for (const key in ml1) {
        if (ml1.hasOwnProperty(key)) {
          this.ML1 = ml1[key];
        }
      }
    });
 */
  }


  ngOnInit() {
     this.ML2 = this.getMontage();
    }
  getHDT() {

    // this.ML2 = this.db.getMontage();


  }

  getTest() {
    console.log('  this.db.montaz_ml1; ', this.db.montaz_ml1);
    return this.db.montaz_ml1;
  }

  getMontage() {
   this.db.getMontage().subscribe((data) => {
     console.log('data ', data);
    this.ML2 = data;
    console.log('this.ML2 ', this.ML2);
   });
  }

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
