import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  WindowScroll: number = 0;
  Root = document.documentElement;

  @HostListener('window:scroll', ['$event'])
  OnWindowScroll(event: Event) {
    this.WindowScroll = (window.scrollY + 108) / 1.8;
    this.Root.style.setProperty('--shadow-number', `${this.WindowScroll}px`);

    // if (window.scrollY > 0 && window.scrollY < 436.8) {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    //   });
    // }
    // if (window.scrollY > 436.8 && window.scrollY < 873.6) {
    //   window.scrollTo({
    //     top: 873.6,
    //     behavior: 'smooth',
    //   });
    // }

  }

  HeaderAnimation: boolean = false;
  LogoAnimation: boolean = false;

  ngOnInit(): void {

    this.Root.style.setProperty('--shadow-number', `27px`);

    setTimeout(() => {
      this.HeaderAnimation = true;
    }, 2000);

    setTimeout(() => {
      this.LogoAnimation = true;
    }, 4000);

  }

}
