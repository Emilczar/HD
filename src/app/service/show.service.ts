import { Injectable } from '@angular/core';
declare const $: any;

@Injectable()
export class ShowService {


  constructor() { }




getTooltip(name) {
  $(function() {
    $(`[class=${name}]`).tooltip();
    $(`[class=${name}]`).on('click', function () {
      $(this).tooltip('hide');
      $(`[class=${name}]`).modal();
    });
  });
}

}

