import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import { routes } from './app.routes';
import { initialLocale } from './language-switcher/language-switcher';
import { TranslocoHttpLoader } from './transloco-http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en-GB', 'pt-PT'],
        // Resolved from localStorage/the browser before Transloco starts
        // fetching, so the first request is already for the right locale.
        defaultLang: initialLocale(),
        fallbackLang: 'en-GB',
        reRenderOnLangChange: true,
        // A project rendered through ProjectPage before its own content is
        // translated (DEF-37, DEF-38) still needs a real sentence, not a
        // missing-key placeholder: show the English copy in the meantime.
        missingHandler: { useFallbackTranslation: true },
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
