import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { MontageComponent } from './montage/montage.component';

import { MontageIdComponent } from './montage/montage-id/montage-id.component';
import { MontageListComponent } from './montage/montage-list/montage-list.component';
import { ListComponent } from './list/list.component';
import { ListHdtComponent } from './list/list-hdt/list-hdt.component';
import { DeviceIdComponent } from './device-id/device-id.component';

const routerApp: Routes = [

{
  path: 'montaz',
  component: MontageComponent,
  children: [
    {
      path: '',
      component: MontageListComponent
      },
    {
    path: ':id',
    component: MontageIdComponent
    }
  ]
},

{
  path: 'lista',
  component: ListComponent,
  children: [
    {
      path: '',
      component: ListHdtComponent
      },
    {
    path: ':id',
    component: DeviceIdComponent
    }
  ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routerApp)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
