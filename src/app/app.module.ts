import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ViewlogComponent } from './viewlog/viewlog.component';
import { ChartsModule } from 'ng2-charts'; //import module chart


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ViewlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule //import module chart
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
