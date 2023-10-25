import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { NoSearchResultComponent } from './components/no-search-result/no-search-result.component';
import { CurrentBalanceComponent } from './admin-components/current-balance/current-balance.component';
import { PayPopUpComponent } from './components/popups/pay-pop-up/pay-pop-up.component';
import { RefundPopupComponent } from './components/popups/refund-popup/refund-popup.component';
import { ChargeDetailPopupComponent } from './components/popups/charge-detail-popup/charge-detail-popup.component';
import { ChargePopupComponent } from './components/popups/charge-popup/charge-popup.component';

@NgModule({
  declarations: [
    NoDataFoundComponent,
    NoSearchResultComponent,
    CurrentBalanceComponent,
    PayPopUpComponent,
    RefundPopupComponent,
    ChargeDetailPopupComponent,
    ChargePopupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    CurrentBalanceComponent
  ]
})
export class SharedModule { }
