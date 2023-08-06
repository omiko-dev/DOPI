import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-swiper',
  template: `
    <swiper
      [spaceBetween]="5"
      [centeredSlides]="true"
      [autoplay]="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      [pagination]="{
        clickable: true
      }"
      class="mySwiper"
    >
      <ng-template swiperSlide *ngFor="let img of imagesUrl">
        <img [src]="img" alt="" />
      </ng-template>
    </swiper>
  `,

  styles: [
    `
      .mySwiper {
        height: 100%;
      }

      img {
        height: 100%;
      }
    `,
  ],
})
export class ProductSwiperComponent {
  @Input() imagesUrl!: string[];
}
