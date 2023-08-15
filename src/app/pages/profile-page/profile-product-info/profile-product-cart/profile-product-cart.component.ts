import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs';
import { CartProduct } from 'src/app/Dto/CartProduct';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-product-cart',
  templateUrl: './profile-product-cart.component.html',
  styleUrls: ['./profile-product-cart.component.scss'],
})
export class ProfileProductCartComponent implements OnInit{
  constructor(private readonly userService: UserService) {}

  data: any;
  Length!: number;
  ngOnInit(): void {
    var token = localStorage.getItem('token');
    this.userService.GetUserCart(token!).subscribe(
      (cart): any => {
        this.data = cart;
        this.Length = this.data.length;

      },
      err => {
        console.log(err);
      }
    )
  }
}
