import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './parts/home/home.component';
import { KolcsonzokComponent } from './parts/kolcsonzok/kolcsonzok.component';
import { KolcsonzesekComponent } from './parts/kolcsonzesek/kolcsonzesek.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KolcsonzokComponent,
    KolcsonzesekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
