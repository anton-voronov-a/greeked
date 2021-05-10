import { Component } from '@angular/core';

import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { ShareComponent } from "./share/share.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private bottomSheet: MatBottomSheet) {
  }

  public share(): void {
    this.bottomSheet.open(ShareComponent);
  }
}
