import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Params
} from '@angular/router';
import {
  DbService
} from '../../db.service';


@Component({
  selector: 'app-montage-id',
  templateUrl: './montage-id.component.html',
  styleUrls: ['./montage-id.component.scss']
})
export class MontageIdComponent implements OnInit {

  data = new Array<any>();
  constructor(private route: ActivatedRoute, private db: DbService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.data = this.db.getM1id(param.get('id'));

    });
  }

}
