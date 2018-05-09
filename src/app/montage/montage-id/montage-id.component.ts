
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-montage-id',
  templateUrl: './montage-id.component.html',
  styleUrls: ['./montage-id.component.scss']
})
export class MontageIdComponent implements OnInit {
testID;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((param: Params) => {
     this.testID = param.get('id');

    });
  }

}
