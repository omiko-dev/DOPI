import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private authService: AuthService) { }
  correct = true;

  LoginDto = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.min(6)]]
  })

  get LoginFormControl() {
    return this.LoginDto.controls;
  }


  Login() {

    if (this.LoginDto.invalid) {
      this.correct = false;
      return;
    }

    console.log(this.LoginDto.value);

    this.authService.Login(this.LoginDto.value).subscribe(token => {
      localStorage.setItem('token', token);
      console.log(token);
    })
    this.correct = true;
  }

}
