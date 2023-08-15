import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Dto/User';
import { IProduct } from '../Dto/Product';
import { Observable } from 'rxjs';
import { CartProduct } from '../Dto/CartProduct';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  USER: IUser | undefined;

  getUser(token: string) {
    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.get<any>('https://localhost:7008/api/User/Profile', {
      headers: Headers,
    });
  }

  addUserCart(product: any): any {
    var token = localStorage.getItem('token');
    if (token == null) return null;

    const Headers = { Authorization: `Bearer ${token}` };
    console.log(product);

    return this.http.post('https://localhost:7008/api/User/SetCart', product, {
      headers: Headers,
    });
  }

  deleteUserCart(token: string, product: IProduct) {
    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.post(
      'https://localhost:7008/api/User/DeleteCart',
      product,
      { headers: Headers }
    );
  }

  GetUserCart(token: string) {
    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.get<CartProduct[]>(
      'https://localhost:7008/api/User/GetCart',
      { headers: Headers }
    );
  }

  addUserPurchase(token: string, product: IProduct) {
    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.post(
      'https://localhost:7008/api/User/AddPurchaseProduct',
      product,
      { headers: Headers }
    );
  }

  GetUserPurchase(token: string) {
    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.get<CartProduct[]>(
      'https://localhost:7008/api/User/GetPurchaseProduct',
      { headers: Headers }
    );
  }
}
