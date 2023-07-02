import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { TypesPageComponent } from './pages/types-page/types-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { HomeAboutComponent } from './pages/home-page/home-about/home-about.component';
import HomePageComponent from './pages/home-page/home-page.component';
import { HomeBtnComponent } from './pages/home-page/home-btn/home-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    TypesPageComponent,
    CreatePageComponent,
    HomeAboutComponent,
    HomePageComponent,
    HomeBtnComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
