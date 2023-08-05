import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Dto/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) { }


  getProduct() {
    return this.http.get<IProduct[]>('https://localhost:7008/api/Product');
  }




}
