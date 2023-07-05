import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  HeaderAnimation: boolean = false;
  LogoAnimation: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.HeaderAnimation = true;
    }, 2000);

    setTimeout(() => {
      this.LogoAnimation = true;
    }, 4000);

  }

}
