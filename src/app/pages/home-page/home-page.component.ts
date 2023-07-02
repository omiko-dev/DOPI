import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export default class HomePageComponent implements OnInit{

  HeaderAnimation: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.HeaderAnimation = true;
    }, 2000);
  }



}
