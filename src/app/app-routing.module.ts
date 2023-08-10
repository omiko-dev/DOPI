import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './login-form/register/register.component';
import { LoginComponent } from './login-form/login/login.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [

  { path: '', component: HomePageComponent },

  {
    path: 'log',
    component: LoginFormComponent,
    children: [
      { path: 'register', component: RegisterComponent },

      { path: 'login', component: LoginComponent }
    ]
  },

  { path: 'product', component: ProductPageComponent },

  { path: 'profile', component: ProfilePageComponent },

  { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
