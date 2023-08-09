import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginDto } from 'src/app/Dto/LoginDto';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  ShowPasswrod: boolean = false;
  Incorrect: boolean = false;

  constructor(private authService: AuthService, private _router: Router, private userService: UserService)
  {
    this.ShowPasswrod = false;
  }


  LoginDto: ILoginDto = {
    Email: '',
    Password: ''
  }

  Login(data: any) {

    if (data.invalid)
      return;

    this.authService.Login(this.LoginDto).subscribe(
      data => {
        localStorage.setItem('token', data);
        this.Incorrect = false;
        this.userService.getUser(data).subscribe(data => this.userService.USER = data);

        this._router.navigate(['/']);
      },
      err => {
        this.Incorrect = true;
      }

    )
  }

  showPassword() {
    this.ShowPasswrod = !this.ShowPasswrod;
  }

}
