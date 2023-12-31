import { Component } from '@angular/core';

@Component({
  selector: 'app-home-btn',
  template: `
    <section>
      <button>Make Your Dopi</button>
    </section>
  `,
  styles: [
    `
      section button {
        padding: 27px 176px;
        border: 2px dotted #18120a;
        margin-top: 284px;
        background: rgba(255, 152, 0, 0.5019607843);
        border-radius: 58px;
        box-shadow: 1px 1px 250px 100px #000000;
        font-family: 'Dancing Script', cursive;
        font-size: 32px;
        color: oldlace;
      }
    `,
  ],
})
export class HomeBtnComponent {}
