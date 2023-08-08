import { Component, HostListener, OnInit } from '@angular/core';
import { IUser } from 'src/app/Dto/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  UserData: any | undefined;

  constructor(private readonly userService: UserService) {
    var token = localStorage.getItem("token")
    if(token){
      this.userService.getUser(token!).subscribe(data => {
        this.UserData = data;
        console.log(this.UserData.name);

      });
    }
  }

  WindowScroll: number = 0;
  Root = document.documentElement;

  @HostListener('window:scroll', ['$event'])
  OnWindowScroll(event: Event) {
    this.WindowScroll = (window.scrollY + 108) / 1.8;
    this.Root.style.setProperty('--shadow-number', `${this.WindowScroll}px`);
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
