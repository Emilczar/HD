import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { MontageComponent } from './montage/montage.component';
import { AppComponent } from './app.component';

const routerApp: Routes = [

{
  path: 'montaz',
  component: MontageComponent
}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routerApp)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
