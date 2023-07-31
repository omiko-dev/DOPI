import { Component } from '@angular/core';

@Component({
  selector: 'app-home-video',
  template: `
    <section>
      <h4>How make Dopi</h4>

      <div>
        <video controls muted>
          <source src="../../../../assets/choco_make.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  `,
  styles: [
    `
      section {
        width: 281px;
        display: grid;
        place-content: center;
        border: 6px double darkgoldenrod;
        box-shadow: 0 0 50px 46px #ada3a31c;

        h4 {
          text-align: center;
          font-family: 'Dancing Script', cursive;
          font-size: 19px;
          color: mistyrose;
          margin: 0;
        }
      }

      video {
        width: 243px;
      }
    `,
  ],
})
export class HomeVideoComponent {}
