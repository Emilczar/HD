import { Component, OnInit, Input } from '@angular/core';
import { Hdt } from '../../hdt';
import { DbService } from '../../db.service';

declare const $: any;
@Component({
  selector: 'app-list-hdt',
  templateUrl: './list-hdt.component.html',
  styleUrls: ['./list-hdt.component.scss']
})
export class ListHdtComponent implements OnInit {

  userFilter: any = { name: '' };

  listHDT = new Array<Hdt>();
  constructor(private db: DbService) { }

  ngOnInit() {

   this.listHDT = this.db.getAll();
  }
}
