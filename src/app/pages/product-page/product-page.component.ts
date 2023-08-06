import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Dto/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{

  Product: any;
  constructor(private param: ActivatedRoute){}

  ngOnInit(): void {
    this.Product = this.param.snapshot.queryParams;
  }


}
