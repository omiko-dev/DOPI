import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginDto } from 'src/app/Dto/LoginDto';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private _router: Router) { }

  Incorrect: boolean = false;

  LoginDto: ILoginDto = {
    Email: '',
    Password: ''
  }

  Login(data: any) {

    if (data.invalid)
      return;


    this.authService.Login(this.LoginDto).subscribe(
      data => {
        localStorage.setItem('token', data)
        this.Incorrect = false;
        this._router.navigate(['/']);
      },
      err => {
        this.Incorrect = true;
      }


    )
  }

}
