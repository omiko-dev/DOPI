import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http: HttpClient) { }


  getProduct() {
    return this.http.get('https://localhost:7008/api/Product');
  }

  


}
