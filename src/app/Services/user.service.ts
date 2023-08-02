import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Dto/User';
import { IProduct } from '../Dto/Product';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUser(token: string) {
    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.get<IUser>('https://localhost:7008/api/User/Profile', {
      headers: Headers,
    });
  }

  getUserCart(token: string) {
    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.get('https://localhost:7008/api/User/GetCart', {
      headers: Headers,
    });
  }

  addUserCart(token: string, product: IProduct) {
    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.post(
      'https://localhost:7008/api/User/SetCart',
      product,
      { headers: Headers }
    );
  }

  deleteUserCart(token: string, product: IProduct) {
    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.post(
      'https://localhost:7008/api/User/DeleteCart',
      product,
      { headers: Headers }
    );
  }

  getUserPurchase(token: string) {
    const Headers = { Authorization: `Bearer ${token}` };

    return this.http.get<IUser>(
      'https://localhost:7008/api/User/GetPurchaseProduct',
      {
        headers: Headers,
      }
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
}
