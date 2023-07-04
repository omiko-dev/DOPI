import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-typing-animation',
  template: ` <div style="display: flex; border-bottom: 1px dashed #7956564d; padding-left: 10px; font-family: 'Roboto Mono', monospace;"> <h1 #animation style="font-size: 24px;"></h1> </div>`,
})
export class TypingAnimationComponent implements AfterViewInit {
  @ViewChild('animation')
  textElement!: ElementRef;

  ngAfterViewInit(): void {
    const option = {
      strings: ['What is Dopi?'],
      startDelay: 5000,
      typeSpeed: 100,
      showCursor: false,
    };

    const _ = new Typed(this.textElement.nativeElement, option);
  }
}
