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

  addUserCart(product: CartProduct): any {
    var token = localStorage.getItem('token');
    if (token == null) return null;

    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.post('https://localhost:7008/api/User/SetCart', product, {
      headers: Headers,
    });
  }

  deleteUserCart(id: number): any {
    var token = localStorage.getItem('token');
    if (token == null) return null;

    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.delete(
      'https://localhost:7008/api/User/DeleteCart?id=' + id,
      {
        headers: Headers,
      }
    );
  }

  GetUserCart() {
    const token = localStorage.getItem('token');

    if (token == null) return null;

    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.get<CartProduct[]>(
      'https://localhost:7008/api/User/GetCart',
      { headers: Headers }
    );
  }

  BuyProduct(product: CartProduct[]) {

    const token = localStorage.getItem('token');

    if (token == null) return null;

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
