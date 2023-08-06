import { Component, EventEmitter, Output } from '@angular/core';
import { Flavor } from 'src/app/Emum/Flavor';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent {
  @Output() filter = new EventEmitter<IProductFilter>();

  filterData: IProductFilter = {
    productName: '',
    productPrice: 0,
    productFlavor: [0, 1, 2],
  };

  filterRefreshBtn() {
    this.filterData = {
      productName: '',
      productPrice: 0,
      productFlavor: [0, 1, 2],
    };

    this.filterBtn();
  }

  filterBtn() {
    this.filter.emit(this.filterData);
  }
}

export interface IProductFilter {
  productName: string;
  productPrice: number;
  productFlavor: number[]
}

