import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'choco';

  constructor(
    private readonly authService: AuthService,
    private cookie: CookieService
  ) {
    var RefreshToken = this.cookie.get('Refresh_Token');
    authService.RefreshToken(RefreshToken).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
