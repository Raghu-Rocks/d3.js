import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SvgComponent } from './svg/svg.component';

import { TweetService } from "./shared/tweet.service";
import { TweetComponent } from './tweet/tweet.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { MapService } from "./shared/map.service";
import { MapComponent } from './map/map.component';

// import { MaterialModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    TweetComponent,
    ScatterplotComponent,
    MapComponent
  ],
  imports: [
    // MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TweetService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
