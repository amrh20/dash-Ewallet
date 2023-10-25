import { CarouselModule } from "ngx-owl-carousel-o";
import { CommonModule } from "@angular/common";
import { CurrentBalanceComponent } from "./admin-components/current-balance/current-balance.component";
import { NgModule } from "@angular/core";
import { NoDataFoundComponent } from "./components/no-data-found/no-data-found.component";
import { NoSearchResultComponent } from "./components/no-search-result/no-search-result.component";
import { PayPopUpComponent } from "./components/popups/pay-pop-up/pay-pop-up.component";
import { RouterModule } from "@angular/router";
import { ChargeDetailPopupComponent } from "./components/popups/charge-detail-popup/charge-detail-popup.component";
import { ChargePopupComponent } from "./components/popups/charge-popup/charge-popup.component";
import { RefundPopupComponent } from "./components/popups/refund-popup/refund-popup.component";

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
  imports: [CommonModule, RouterModule, CarouselModule],
  exports: [CurrentBalanceComponent, CarouselModule],
})
export class SharedModule { }
