import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MaterialModule } from "../material-module";


import { HelpDialogComponent } from './help-dialog.component';


@NgModule({
  declarations: [HelpDialogComponent],
  exports: [HelpDialogComponent],
  imports: [
    CommonModule,
    FormsModule,

    MaterialModule
  ]
})
export class HelpDialogModule { }
