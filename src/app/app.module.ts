import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StaticReactiveFormsComponent } from './static-reactive-forms/static-reactive-forms.component';

@NgModule({
  declarations: [AppComponent, StaticReactiveFormsComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
