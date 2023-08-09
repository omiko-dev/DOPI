import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IRegisterDto } from 'src/app/Dto/RegisterDto';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  OtherEmailReq: boolean = false;
  InvalidInput: boolean = false;
  InvalidRepeatPass: boolean = false;
  ShowPasswrod: boolean = false;

  constructor(
    private router: Router,
    private readonly authService: AuthService
  ) {
    this.ShowPasswrod = false;
  }

  user = {
    Email: '',
    Name: '',
    Password: '',
    PasswordRepeat: '',
  };

  Submit(user: any) {
    if (user.invalid) {
      this.InvalidInput = true;
      return;
    }
    if (this.user.Password !== this.user.PasswordRepeat) {
      this.InvalidRepeatPass = true;
      return;
    }

    var newUser: IRegisterDto = {
      Email: this.user.Email,
      Name: this.user.Name,
      PasswordHash: this.user.Password,
    };

    this.authService.Register(newUser).subscribe(
      (data) => {
        this.OtherEmailReq = false;
        this.router.navigate(['/log/login']);
      },
      (err) => {
        this.OtherEmailReq = true;
        this.InvalidRepeatPass = false;
        this.InvalidInput = false;
      }
    );
  }

  showPassword() {
    this.ShowPasswrod = !this.ShowPasswrod;
  }
}


