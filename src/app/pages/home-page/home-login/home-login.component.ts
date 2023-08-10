import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-login',
  template: `
    <section
      [routerLink]="UserName == undefined ? '/log/register' : '/'"
      (click)="UserName == undefined ? null : Profile()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="bi bi-person-circle"
        viewBox="0 0 16 16"
        [ngClass]="UserName == undefined ? '' : 'active'"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
      <p [ngClass]="UserName == undefined ? '' : 'active'">
        {{ UserName == undefined ? ' Login' : ' Hello ' + UserName }}
      </p>
    </section>
    <app-home-login-popup
      class="popup"
      [ngClass]="PopUp == true ? 'popup_show' : ''"
    />
  `,
  styles: [
    `
      section {
        padding: 20px 6px;
        display: flex;
        gap: 3px;
        cursor: pointer;
        padding: 20px 9px 0px 9px;

        svg {
          width: 29px;
          height: 29px;
          fill: lightslategray;
        }

        p {
          color: lightslategray;
        }
      }

      section .active {
        color: gold;
        fill: gold;
      }

      .popup {
        display: none;
      }

      .popup_show {
        display: grid;
      }
    `,
  ],
})
export class HomeLoginComponent {
  @Input() UserName: string | undefined;

  PopUp: boolean = false;

  constructor(private readonly cookie: CookieService) {
    this.PopUp = false;
  }

  Profile() {
    this.PopUp = !this.PopUp;
  }
}

// this.UserName = undefined;
// localStorage.removeItem('token');
// this.cookie.delete('Refresh_Token');
