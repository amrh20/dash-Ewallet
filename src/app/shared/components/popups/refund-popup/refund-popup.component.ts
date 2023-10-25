import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refund-popup',
  templateUrl: './refund-popup.component.html',
  styleUrls: ['./refund-popup.component.scss']
})
export class RefundPopupComponent {
  constructor (
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {
  }

  closeModal() {
    this.dialogRef.close();
  }

  refund() {


  }
}
