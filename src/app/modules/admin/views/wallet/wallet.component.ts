import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChargePopupComponent } from 'src/app/shared/components/popups/charge-popup/charge-popup.component';
import { RefundPopupComponent } from 'src/app/shared/components/popups/refund-popup/refund-popup.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  constructor (private dialog: MatDialog) {

  }

  openRefund() {
    const dialogRef = this.dialog.open(RefundPopupComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });

  }

  openCharge() {
    const dialogRef = this.dialog.open(ChargePopupComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
