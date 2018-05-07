


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { DataService } from './data.service';
import { DbService } from './db.service';
import { AppRoutingModule } from './/app-routing.module';
import { MontageComponent } from './montage/montage.component';
import { HdtComponent } from './hdt/hdt.component';





@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MontageComponent,
    HdtComponent
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
