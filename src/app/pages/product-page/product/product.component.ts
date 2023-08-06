import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Dto/Product';
import { Flavor } from 'src/app/Emum/Flavor';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  Data?: any;
  flavor!: string


  constructor(private readonly param: ActivatedRoute) {
    this.Data = param.snapshot.queryParams;
    this.flavor = Flavor[this.Data.flavor];
    console.log(this.Data);


  }


}
