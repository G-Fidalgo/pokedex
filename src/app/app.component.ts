import { Component, Inject } from '@angular/core';
import { L10nConfigRef, L10N_CONFIG, LocaleService } from 'angular-l10n';

import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  countryMenuItems: any[];
  constructor(
    @Inject(L10N_CONFIG) private configuration: L10nConfigRef,
    private locale: LocaleService,
    private logger: NGXLogger
    ){
    this.countryMenuItems = this.configuration.localizedRouting.schema;
  }

  selectLocale(language: string, country: string, numberingSystem: string, currency: string, zoneName: string): void {

    this.locale.setDefaultLocale(language, country, '', numberingSystem);
    this.locale.setCurrentCurrency(currency);
    this.locale.setCurrentTimezone(zoneName);
}
}
