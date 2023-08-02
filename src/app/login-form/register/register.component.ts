import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IRegisterDto } from 'src/app/Dto/RegisterDto';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  OtherEmailReq: boolean = false;
  InvalidInput: boolean = false;

  constructor(private router: Router, private readonly authService: AuthService){}

  user: IRegisterDto = {
    Email: '',
    Name: '',
    PasswordHash: ''
  }

  Submit(user: any) {

    if (user.invalid) {
      this.InvalidInput = true;
      return;
    };

    // console.log(user.value);

    this.authService.Register(this.user).subscribe(
      data => {
        this.OtherEmailReq = false;
        this.router.navigate(['/log/login']);

      },
      err => {
        this.OtherEmailReq = true;

      }
    );


  }


}


