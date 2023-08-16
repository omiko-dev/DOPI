import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartProduct } from 'src/app/Dto/CartProduct';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.scss']
})
export class CartSectionComponent implements OnInit{

  @Output() SideMove = new EventEmitter<boolean>();

  constructor(private readonly userService: UserService){}


  data!: CartProduct[];

  ngOnInit(): void {

    this.getProduct();

  }

  sideClose() {
    const cartSide = false;
    this.SideMove.emit(cartSide);
  }

  add(product: CartProduct) {
    console.log(product);

    this.userService.addUserCart(product).subscribe(
      (data: any) => {
        this.getProduct();
        console.log(this.data);

      },
      (err: any) => console.log(err)
    );
  }

  remove(product: CartProduct) {
    console.log(product);

      this.userService.deleteUserCart(product.id).subscribe((data: any) => {
        this.getProduct();

      },
      (err: any) => console.log(err)
    );
  }

  private getProduct() {
    var token = localStorage.getItem('token');

    if (token) {
      this.userService.GetUserCart(token).subscribe(data => {
        this.data = data;


      }, err => err)
    }

  }

}
