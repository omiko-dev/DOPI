import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegisterDto } from '../Dto/RegisterDto';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly cookie: CookieService
  ) {}

  Login(data: any) {
    return this.http.post('https://localhost:7008/api/Auth/Login', data, {
      responseType: 'text',
      withCredentials: true,
    });
  }

  Register(data: IRegisterDto) {
    return this.http.post('https://localhost:7008/api/Auth/Register', data, {
      responseType: 'text',
    });
  }

  RefreshToken(RefreshToken: string) {
    console.log(RefreshToken);
       const encodedRefreshToken = encodeURIComponent(RefreshToken);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      'https://localhost:7008/api/Auth/Refresh-Token?refreshToken=' +
        encodedRefreshToken,
      true,
      {
        responseType: 'text',
        withCredentials: true,
        headers: headers,
      }
    );
  }
}
