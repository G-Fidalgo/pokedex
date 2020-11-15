import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nLoader, LocaleSeoModule, LocaleValidationModule, LocalizationModule } from 'angular-l10n';
import { initL10n, l10nConfig } from '../l10n-config';
import { LoggerModule } from 'ngx-logger';
import { loggerConfig } from '../logger-config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LocalizationModule.forRoot(l10nConfig),
    LocaleSeoModule.forRoot(),
    LocaleValidationModule.forRoot(),
    LoggerModule.forRoot(loggerConfig)
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: initL10n, deps: [L10nLoader], multi: true},
  ],
  exports: [
    LocalizationModule,
    LocaleSeoModule,
    LocaleValidationModule,
    LoggerModule,
  ]
})
export class SharedModule { }
