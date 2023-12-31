import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-product-purchase',
  templateUrl: './profile-product-purchase.component.html',
  styleUrls: ['./profile-product-purchase.component.scss'],
})
export class ProfileProductPurchaseComponent implements OnInit {
  constructor(private readonly userService: UserService) { }

  data: any;
  Length!: number;
  ngOnInit(): void {
    var token = localStorage.getItem('token');
    this.userService.GetUserPurchase(token!).subscribe(
      (purchase): any => {
        this.data = purchase;
        this.Length = this.data.length;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
