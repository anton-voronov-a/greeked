import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../material-module";

import { HomeComponent } from "./home.component";
import { HelpDialogModule } from "../help-dialog/help-dialog.module";


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    
    MaterialModule,

    HelpDialogModule
  ]
})
export class HomeModule { }
