import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charge-popup',
  templateUrl: './charge-popup.component.html',
  styleUrls: ['./charge-popup.component.scss']
})
export class ChargePopupComponent {
  firstOne: boolean = true
  secondOne: boolean = false

  constructor (
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {
  }

  closeModal() {
    this.dialogRef.close();
  }

  gotonextStep() {

    this.firstOne = false
    this.secondOne = true

  }

  charge() {

  }
}
