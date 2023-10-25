import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  HttpRequest,
} from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { AmrLibModule } from "@amrohamdy/ang-lib";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgApexchartsModule } from "ng-apexcharts";
import { NgModule } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { RequestsInterceptor } from "./shared/interceptors/requests.interceptor";
import { SharedModule } from "./shared/shared.module";
import { ToastrModule } from "ngx-toastr";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot(),
    NgApexchartsModule,
    NgxSpinnerModule,
    AmrLibModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
