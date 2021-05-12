import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../material-module";

import { HomeComponent } from "./home.component";


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    
    MaterialModule
  ]
})
export class HomeModule { }
