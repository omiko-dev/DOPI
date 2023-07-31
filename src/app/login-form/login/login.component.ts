import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fb: FormBuilder){}

  LoginDto = this.fb.group({
    Email: ['', Validators.required, Validators.email],
    Password: ['', Validators.required, Validators.min(6)]
  })

  Login() {
    console.log(this.LoginDto.value);
  }

}
