import { ISOCode, L10nConfig, L10nLoader, LogLevel, ProviderType, StorageStrategy } from 'angular-l10n';
import { environment } from 'src/environments/environment';

export const  l10nConfig: L10nConfig = {
    logger: {
        level: environment.production ? LogLevel.Off : LogLevel.Warn
    },
    locale: {
        languages: [
            { code: 'en', dir: 'ltr' },
            { code: 'es', dir: 'ltr' },
        ],
        defaultLocale: { languageCode: 'es', countryCode: 'ES', numberingSystem: 'latn' },
        currency: 'EUR',
        timezone: 'Europe/Rome',
        storage: StorageStrategy.Cookie,
        cookieExpiration: 30
    },
    translation: {
        providers: [
            { type: ProviderType.Static, prefix: './assets/locale-' }
        ],
        caching: true,
        version: '8.0.0',
        rollbackOnError: true,
        composedKeySeparator: '.',
        missingValue: 'No key',
        i18nPlural: true
    },
    localizedRouting: {
        format: [ISOCode.Language, ISOCode.Country],
        defaultRouting: false,
        schema: [
            {
                text: 'United States',
                languageCode: 'en', countryCode: 'US', numberingSystem: 'latn', currency: 'USD', timezone: 'America/Los_Angeles'
            },
            {
                text: 'United Kingdom',
                languageCode: 'en', countryCode: 'GB', numberingSystem: 'latn', currency: 'GBP', timezone: 'Europe/London'
            },
            {
                text: 'España',
                languageCode: 'es', countryCode: 'ES', numberingSystem: 'latn', currency: 'EUR', timezone: 'Europe/Rome'
            }
        ]
    }
};

// Advanced initialization.
export function initL10n(l10nLoader: L10nLoader): Function {
    return () => l10nLoader.load();
}