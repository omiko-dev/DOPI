import { Component, Input } from '@angular/core';
import { productType } from '../profile-user-information/profile-user-information.component';

@Component({
  selector: 'app-profile-product-info',
  templateUrl: './profile-product-info.component.html',
  styleUrls: ['./profile-product-info.component.scss']
})
export class ProfileProductInfoComponent {
  @Input() ProductType: productType  = "cart";








}
