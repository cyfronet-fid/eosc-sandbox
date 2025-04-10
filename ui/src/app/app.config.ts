import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes'
import { ScriptLoaderService } from './services/script-loader.service';

export function loadJQuery(scriptLoader: ScriptLoaderService) {
  const zammadUrl = 'https://helpdesk.sandbox.eosc-beyond.eu/assets/form/form.js'
  return () => scriptLoader.loadScript(zammadUrl);
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: loadJQuery,
      deps: [ScriptLoaderService],
      multi: true
    }

  ]
};
