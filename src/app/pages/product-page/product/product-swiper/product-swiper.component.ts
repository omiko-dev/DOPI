import { Component, Input } from '@angular/core';

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
        clickable: false
      }"
      class="mySwiper"
    >
      <ng-template swiperSlide *ngFor="let img of imagesUrl">
        <img [src]="img"/>
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
  @Input() imagesUrl?: string[];
}
