import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './login-form/register/register.component';
import { LoginComponent } from './login-form/login/login.component';

const routes: Routes = [

  { path: '', component: PagesComponent },

  {
    path: 'log',
    component: LoginFormComponent,
    children: [
      { path: 'register', component: RegisterComponent },

      { path: 'login', component: LoginComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
