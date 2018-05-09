import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { MontageComponent } from './montage/montage.component';
import { AppComponent } from './app.component';
import { MontageIdComponent } from './montage/montage-id/montage-id.component';

const routerApp: Routes = [

{
  path: 'montaz',
  component: MontageComponent,
  children: [
    {
    path: ':id',
    component: MontageIdComponent
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
