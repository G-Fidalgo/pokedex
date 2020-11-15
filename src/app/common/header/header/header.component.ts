import { Component, Inject, OnInit } from '@angular/core';
import { L10nConfigRef, L10N_CONFIG, LocaleService } from 'angular-l10n';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  countryMenuItems: any[];

  constructor(
    @Inject(L10N_CONFIG) private configuration: L10nConfigRef,
    private locale: LocaleService

  ) {
    this.countryMenuItems = this.configuration.localizedRouting.schema;

   }

  ngOnInit() {
  }

  selectLocale(language: string, country: string, numberingSystem: string, currency: string, zoneName: string): void {
    this.locale.setDefaultLocale(language, country, '', numberingSystem);
    this.locale.setCurrentCurrency(currency);
    this.locale.setCurrentTimezone(zoneName);
}

}
