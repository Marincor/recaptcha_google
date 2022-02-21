import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module, RecaptchaModule } from "ng-recaptcha";
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { RecaptchaComponent } from './shared/recaptcha/recaptcha.component';
import { HomeComponent } from './views/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RecaptchaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaV3Module
  ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptchaV3_SITE_KEY}],
  bootstrap: [AppComponent]
})
export class AppModule { }
