import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-about-typing-animation',
  template: `
    <div style="display: flex; ">
      <h1
        #animation
        style="font-size: 16px; color: snow; font-weight: 100; text-shadow: 0 0 14px black; font-family: 'Roboto Mono', monospace;"
      ></h1>
    </div>
  `,
})
export class AboutTypingAnimationComponent implements AfterViewInit {
  text: string = ` Dopi, the renowned chocolate maker company, invites you to indulge in the art of chocolate making. With Dopi, you can
        transform raw ingredients into exquisite chocolates. Unleash your creativity and explore a world of flavors, textures,
        and aromas. Elevate your chocolate-making skills and savor the joy of crafting your own delicious treats. Join Dopi and
        embrace the chocolatier within you.`;

  @ViewChild('animation')
  textElement!: ElementRef;

  ngAfterViewInit(): void {
    const option = {
      strings: [this.text],
      startDelay: 10000,
      typeSpeed: 50,
      showCursor: false,
    };

    const _ = new Typed(this.textElement.nativeElement, option);
  }
}


