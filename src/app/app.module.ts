import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initL10n, l10nConfig } from './l10n-config';
import {
  L10nLoader,
  LocalizationModule,
  LocaleSeoModule,
  LocaleValidationModule,
} from 'angular-l10n';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LocalizationModule.forRoot(l10nConfig),
    LocaleSeoModule.forRoot(),
    LocaleValidationModule.forRoot()
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: initL10n, deps: [L10nLoader], multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
