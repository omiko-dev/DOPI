import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-user-information',
  templateUrl: './profile-user-information.component.html',
  styleUrls: ['./profile-user-information.component.scss'],
})
export class ProfileUserInformationComponent {
  @Output() Product = new EventEmitter<productType>();

  CartActive: boolean = true;
  PurchaseActive: boolean = false;
  Type: productType;

  constructor(private readonly userService: UserService) {
    this.Type = 'cart';
    this.Product.emit(this.Type);
  }

  cartActive() {
    this.CartActive = true;
    this.PurchaseActive = false;
    this.Type = 'cart';
    this.Product.emit(this.Type);
  }

  purchaseActive() {
    this.CartActive = false;
    this.PurchaseActive = true;
    this.Type = 'purchase';
    this.Product.emit(this.Type);
  }
}

export type productType = "cart" | "purchase";
