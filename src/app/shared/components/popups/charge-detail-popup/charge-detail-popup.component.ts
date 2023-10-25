import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charge-detail-popup',
  templateUrl: './charge-detail-popup.component.html',
  styleUrls: ['./charge-detail-popup.component.scss']
})
export class ChargeDetailPopupComponent {
  constructor (
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router, private dialog: MatDialog
  ) {
  }

  closeModal() {
    this.dialogRef.close();
  }

  charge() {
    console.log("chargecharge")
    const dialogRef = this.dialog.open(ChargeDetailPopupComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });

  }
}
