import { Component } from '@angular/core';

@Component({
  selector: 'app-home-scroll-down',
  templateUrl: './home-scroll-down.component.html',
  styleUrls: ['./home-scroll-down.component.scss']
})
export class HomeScrollDownComponent {


  scrollDown() {
    window.scrollTo({
      top: 873.6,
      behavior: 'smooth'
    })
  }

}
