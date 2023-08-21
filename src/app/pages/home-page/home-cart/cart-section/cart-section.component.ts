import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { pipe } from 'rxjs';
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
    this.userService.addUserCart(product).subscribe(
      (data: any) => {
        this.getProduct()
      },
      (err: any) => err
    );
  }

  remove(product: CartProduct) {

      this.userService.deleteUserCart(product.id).subscribe((data: any) => {
        this.getProduct();

      },
      (err: any) => err
    );
  }

  private getProduct() {

    this.userService.GetUserCart()?.subscribe(data => {
      this.data = data;
    }, err => err)
  }

}
