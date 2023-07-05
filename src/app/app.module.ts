import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { TypesPageComponent } from './pages/types-page/types-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { HomeAboutComponent } from './pages/home-page/home-about/home-about.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeBtnComponent } from './pages/home-page/home-btn/home-btn.component';
import { TypingAnimationComponent } from './pages/home-page/home-about/typing-animation/typing-animation.component';
import { AboutTypingAnimationComponent } from './pages/home-page/home-about/about-typing-animation/about-typing-animation.component';
import { HomeVideoComponent } from './pages/home-page/home-video/home-video.component';
import { HomeLogoComponent } from './pages/home-page/home-logo/home-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    TypesPageComponent,
    CreatePageComponent,
    HomeAboutComponent,
    HomePageComponent,
    HomeBtnComponent,
    TypingAnimationComponent,
    AboutTypingAnimationComponent,
    HomeVideoComponent,
    HomeLogoComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
