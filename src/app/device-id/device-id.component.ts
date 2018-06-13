import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DbService } from '../db.service';
import { Hdt } from '../hdt';

@Component({
  selector: 'app-device-id',
  templateUrl: './device-id.component.html',
  styleUrls: ['./device-id.component.scss']
})
export class DeviceIdComponent implements OnInit {

  data = new Array();
  constructor(private route: ActivatedRoute, private db: DbService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.data = this.db.getAllID(param.get('id'));

    });
  }

}
