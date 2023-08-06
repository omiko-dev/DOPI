import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map, pipe } from 'rxjs';
import { IProduct } from 'src/app/Dto/Product';
import { ProductService } from 'src/app/Services/product.service';
import { IProductFilter } from './product-filter/product-filter.component';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss'],
})
export class HomeProductsComponent {
  constructor(private productService: ProductService) {}


  Product$: Observable<IProduct[]> = this.productService.getProduct();

  FillterProduct$: Observable<IProduct[]> = this.Product$;

  filterData($event: any) {
    this.FillterProduct$ = this.Product$.pipe(
      map((product) => {
        return product.filter((p) => {
          console.log($event);

          return (
            p.price > $event.productPrice &&
            p.productName.toLowerCase().includes($event.productName) &&
            $event.productFlavor.includes(p.flavor)
          );

        });
      })
    );
  }
}
