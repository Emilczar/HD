


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { DbService } from './db.service';
import { DataService } from './data.service';
import { AppRoutingModule } from './/app-routing.module';
import { MontageComponent } from './montage/montage.component';
import { HdtComponent } from './hdt/hdt.component';
import { MontageIdComponent } from './montage/montage-id/montage-id.component';







@NgModule({
  declarations: [
    AppComponent,
    MontageComponent,
    HdtComponent,
    MontageIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
