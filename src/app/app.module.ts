import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';

import { HeaderModule } from './common/header/header.module';
import { SharedModule } from './shared/shared.module';
import { FooterModule } from './common/footer/footer.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    MainModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
