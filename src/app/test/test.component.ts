import { DbService } from './../db.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(public dane: DbService) {


  }

  ngOnInit() {
  }
get_dane() {

  console.log('wynik: ', this.dane.getMontage());

}
}
