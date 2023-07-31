import { Component } from '@angular/core';

import SwiperCore, { Autoplay, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-login-swiper',
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
      <ng-template swiperSlide>
        <img src="../../../assets/chocochoco.jpg" alt="" />
      </ng-template>
      <ng-template swiperSlide>
        <img src="../../../assets/chocochoco2.jpg" alt="" />
      </ng-template>
      <ng-template swiperSlide>
        <img src="../../../assets/chocochoco3.jpg" alt="" />
      </ng-template>
    </swiper>
  `,

  styles: [
    `
      .mySwiper {
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class LoginSwiperComponent {}
