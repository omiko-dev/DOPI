import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CartProduct } from 'src/app/Dto/CartProduct';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-purchase-carts',
  templateUrl: './purchase-carts.component.html',
  styleUrls: ['./purchase-carts.component.scss'],
})
export class PurchaseCartsComponent implements OnInit {
  constructor(private readonly userService: UserService) {}

  CartProduct!: CartProduct[] | null;

  fullPrice: number = 0;

  ngOnInit(): void {
    this.getProduct();
  }

  add(product: CartProduct) {
    this.userService.addUserCart(product).subscribe(
      (data: any) => {
        this.getProduct();
      },
      (err: any) => console.log(err)
    );
  }

  remove(product: CartProduct) {
    console.log(product);

    this.userService.deleteUserCart(product.id).subscribe(
      (data: any) => {
        this.getProduct();
      },
      (err: any) => console.log(err)
    );
  }

  buyProduct() {
    if (this.CartProduct !== null) {
      this.userService.BuyProduct(this.CartProduct)?.subscribe(data => data);
      this.CartProduct = null;
      this.fullPrice = 0;
    }
  }


  private getProduct() {
    this.userService.GetUserCart()?.subscribe(
      (data) => {
        this.CartProduct = data;
        this.fullPrice = 0;
        data.forEach((el) => {
          this.fullPrice += el.price * el.count;
        });
      },
      (err) => {
        return null;
      }
    );
  }
}
