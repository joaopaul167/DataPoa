import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { ListBusComponent } from './list-bus/list-bus.component';
import { ListMicroBusComponent } from './list-micro-bus/list-micro-bus.component';
import { NavComponent } from './nav/nav.component';
import { E404Component} from './e404/e404.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBusComponent,
    ListMicroBusComponent,
    NavComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DataTablesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
