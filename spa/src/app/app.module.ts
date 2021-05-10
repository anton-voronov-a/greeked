import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from "./material-module";
import { HomeModule } from "./home/home.module";
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MaterialModule,

    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
