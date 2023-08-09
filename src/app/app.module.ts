// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
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
import { HomeScrollDownComponent } from './pages/home-page/home-scroll-down/home-scroll-down.component';
import { HomeLoginComponent } from './pages/home-page/home-login/home-login.component';
import { HomeCartComponent } from './pages/home-page/home-cart/home-cart.component';
import { HomeProductsComponent } from './pages/home-page/home-products/home-products.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './login-form/register/register.component';
import { LoginComponent } from './login-form/login/login.component';
import { LoginSwiperComponent } from './login-form/login-swiper/login-swiper.component';
import { BackLeftIconComponent } from './Icons/back-left-icon.component';
import { ProductCardComponent } from './pages/home-page/home-products/product-card/product-card.component';
import { ProductFilterComponent } from './pages/home-page/home-products/product-filter/product-filter.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductComponent } from './pages/product-page/product/product.component';
import { ProductSwiperComponent } from './pages/product-page/product/product-swiper/product-swiper.component';
import { HomeLoginPopupComponent } from './pages/home-page/home-login/home-login-popup/home-login-popup.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { EyeIconComponent } from './Icons/eye-icon.component';
import { EyeSlashIconComponent } from './Icons/eye-slash-icon.component';

// Services
import { AuthService } from './Services/auth.service';
import { ProductService } from './Services/product.service';
import { UserService } from './Services/user.service';
import { CookieService } from 'ngx-cookie-service';

// Guards
import { AuthGuard } from './Guard/auth.guard';

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
    HomeLogoComponent,
    HomeScrollDownComponent,
    HomeLoginComponent,
    HomeCartComponent,
    HomeProductsComponent,
    LoginFormComponent,
    RegisterComponent,
    LoginComponent,
    LoginSwiperComponent,
    BackLeftIconComponent,
    ProductCardComponent,
    ProductFilterComponent,
    ProductPageComponent,
    ProductComponent,
    ProductSwiperComponent,
    HomeLoginPopupComponent,
    ProfilePageComponent,
    EyeIconComponent,
    EyeSlashIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    CookieService,
    AuthService,
    ProductService,
    UserService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
