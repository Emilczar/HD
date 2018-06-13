


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
import { MontageListComponent } from './montage/montage-list/montage-list.component';
import { ShowService } from './service/show.service';
import { ListComponent } from './list/list.component';

import { ListHdtComponent } from './list/list-hdt/list-hdt.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { DeviceIdComponent } from './device-id/device-id.component';







@NgModule({
  declarations: [
    AppComponent,
    MontageComponent,
    HdtComponent,
    MontageIdComponent,
    MontageListComponent,
    ListComponent,
    ListHdtComponent,
    DeviceIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FilterPipeModule,
    FormsModule
  ],
  providers: [DataService, DbService, ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
