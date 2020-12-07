import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, CommonModule, AppRoutingModule, CoreModule, ECommerceModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
