import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChargePopupComponent } from '../../components/popups/charge-popup/charge-popup.component';

@Component({
  selector: 'app-current-balance',
  templateUrl: './current-balance.component.html',
  styleUrls: ['./current-balance.component.scss']
})
export class CurrentBalanceComponent {

  constructor (private dialog: MatDialog) {

  }
  openCharge() {
    const dialogRef = this.dialog.open(ChargePopupComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
