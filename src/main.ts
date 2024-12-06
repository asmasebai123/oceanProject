import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom([BrowserAnimationsModule]),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
  ]
}
)
  .catch((err) => console.error(err));
