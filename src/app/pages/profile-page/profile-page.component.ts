import { Component } from '@angular/core';
import { productType } from './profile-user-information/profile-user-information.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {

  ProductType: productType = 'purchase';


  productType(_event: productType) {
    this.ProductType = _event;

  }

}
