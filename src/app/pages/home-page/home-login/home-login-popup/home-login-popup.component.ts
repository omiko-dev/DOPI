import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-login-popup',
  template: `
    <div>
      <button>Show Your Profile</button>
      <button (click)="LogOut()">Log Out</button>
    </div>
  `,

  styles: [
    `
      div {
        display: grid;
        padding: 10px 22px;
        background: #5e63675c;
        gap: 14px;

        button {
          font-size: 17px;
          padding: 5px 25px;
          border: none;
        }
      }
    `,
  ],
})
export class HomeLoginPopupComponent {
  constructor(
    private readonly cookie: CookieService,
    private readonly router: Router
  ) {}

  LogOut() {
    localStorage.removeItem('token');
    this.cookie.delete('Refresh_Token');
    this.router.navigate(['/log/login']);
  }
}
