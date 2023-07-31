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

  constructor(private router: Router, private readonly authService: AuthService){}

  user: IRegisterDto = {
    Email: '',
    Name: '',
    Password: ''
  }

  Submit(user: any) {

    if (user.invalid) {
      return;
    }

    console.log(user.value);

    this.authService.Register(this.user).subscribe((data) => {
      console.log(data);
    });

    this.router.navigate(['/log/login'])

  }


}


