import { Component } from '@angular/core';

@Component({
  selector: 'app-home-cart',
  template: `
    <section (click)="sideOpen()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="bi bi-cart-check-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"
        />
      </svg>
    </section>

    <app-cart-section
      (SideMove)="sideClose($event)"
      [ngClass]="sideMove ? 'open' : 'close'"
    />
  `,
  styles: [
    `
      section {
        margin: 28px;

        svg {
          width: 29px;
          height: 29px;
          fill: lightslategray;
        }
      }

      app-cart-section {
        position: absolute;
        top: 0;
        transition: 0.5s;
      }

      .open {
        right: -30px;
      }

      .close {
        right: -367px;
      }
    `,
  ],
})
export class HomeCartComponent {
  sideMove: boolean = false;

  sideOpen() {
    this.sideMove = true;
  }

  sideClose($event: any) {
    this.sideMove = $event;
  }
}
