import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './Services/user.service';

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
    if (this.cookie.check('Refresh_Token')) {
      var RefreshToken = this.cookie.get('Refresh_Token');
      this.authService.RefreshToken(RefreshToken).subscribe(
        (data) => {
          return data;
        },
        (err) => {
          return err;
        }
      );
    }
  }
}
