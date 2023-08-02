import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegisterDto } from '../Dto/RegisterDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }


  Login(data: any) {

    return this.http.post(
      'https://localhost:7008/api/Auth/Login',
      data,
      {responseType: 'text'}
    );
  }

  Register(data: IRegisterDto) {

    return this.http.post(
      'https://localhost:7008/api/Auth/Register',
      data,
      {responseType: 'json'}
    );
  }

  RefreshToken() {
    return this.http.post(
      'https://localhost:7008/api/Auth/Refresh-Token',
      true,
      { responseType: 'text'}
    );
  }

}
