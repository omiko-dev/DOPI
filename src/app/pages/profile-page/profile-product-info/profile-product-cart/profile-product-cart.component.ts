import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-product-cart',
  templateUrl: './profile-product-cart.component.html',
  styleUrls: ['./profile-product-cart.component.scss'],
})
export class ProfileProductCartComponent implements OnInit{
  constructor(private readonly userService: UserService) {}

  data: any;
  ngOnInit(): void {
    var token = localStorage.getItem('token');
    this.data = this.userService.getUser(token!).pipe(
      map((data) => {
        return data.cart;
      }),
      catchError((err) => err)
    );
  }
}
