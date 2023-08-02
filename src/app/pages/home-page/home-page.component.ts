import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { HttpService } from 'src/app/Services/http.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  WindowScroll: number = 0;
  Root = document.documentElement;

  constructor(private readonly httpService: HttpService, private readonly authService: AuthService){}

  @HostListener('window:scroll', ['$event'])
  OnWindowScroll(event: Event) {
    this.WindowScroll = (window.scrollY + 108) / 1.8;
    this.Root.style.setProperty('--shadow-number', `${this.WindowScroll}px`);

  }

  HeaderAnimation: boolean = false;
  LogoAnimation: boolean = false;

  ngOnInit(): void {


      this.authService.RefreshToken().subscribe(
        result => {
          console.log(result);
        },
        err => {
          console.log(err);
        }

      )

    this.Root.style.setProperty('--shadow-number', `27px`);

    setTimeout(() => {
      this.HeaderAnimation = true;
    }, 2000);

    setTimeout(() => {
      this.LogoAnimation = true;
    }, 4000);

  }

}
