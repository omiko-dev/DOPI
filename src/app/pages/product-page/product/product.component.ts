import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Dto/Product';
import { Flavor } from 'src/app/Emum/Flavor';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  flavor!: string;
  Data: any;
  constructor(
    private readonly param: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    var id: any = this.param.snapshot.params;
    this.productService.getProductById(+id.id).subscribe(
      (data): any => {
        this.Data = data;
        this.flavor = Flavor[data.flavor];
      },
      (err) => {
        this.router.navigate(['/'])
      }
    );
  }


  addCart() {


    this.userService.addUserCart(this.Data).subscribe(
      (data: any) => {
        this.router.navigate(['/']);
        return data;
      },
      (err: any) => {
        return err;
      }
    )

    return null;

  }

}
