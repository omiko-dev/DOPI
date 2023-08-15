import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.scss']
})
export class CartSectionComponent implements OnInit{

  constructor(private readonly userService: UserService){}

  data: any;

  ngOnInit(): void {

    this.userService.addUserCart(){
      
    }


  }


  add() {


  }

}
