import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { HelpDialogComponent } from "./help-dialog.component";


@Injectable({
  providedIn: 'root'
})
export class HelpDialogService {

  constructor(
    private dialog: MatDialog) { }


  public show(): void {
    this.dialog.open(HelpDialogComponent, {
      panelClass: [
        'mat-typography'
      ]
    });
  }
}
