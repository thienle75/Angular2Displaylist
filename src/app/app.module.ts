import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_CONFIG, AppConfig } from './app.config';

import { AppComponent } from './app.component';
import { MapListComponent } from './map/map-list.component';
import { MapItemComponent } from './map/map-item.component';

import {MapService} from './map/map.service';
 
@NgModule({

  imports: [ BrowserModule, FormsModule, HttpModule ],

  declarations: [
    AppComponent,
    MapListComponent,
    MapItemComponent,
  ],
  
  providers: [MapService,  { provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
