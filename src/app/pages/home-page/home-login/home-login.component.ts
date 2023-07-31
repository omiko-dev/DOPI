import { Component } from '@angular/core';

@Component({
  selector: 'app-home-login',
  template: `
    <section routerLink="/log/register">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="bi bi-person-circle"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
      <p>Login</p>
    </section>
  `,
  styles: [
    `
      section {
        padding: 20px 6px;
        display: flex;
        gap: 3px;
        cursor: pointer;

        svg {
          width: 29px;
          height: 29px;
          fill: lightslategray;
        }

        p {
          color: lightslategray;
        }
      }
    `,
  ],
})
export class HomeLoginComponent {}
