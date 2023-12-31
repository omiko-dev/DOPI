import { Component } from '@angular/core';

@Component({
  selector: 'app-home-logo',
  template: `
    <svg
      (click)="upBtn()"
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="60px"
      height="60px"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
      style="cursor: pointer;"
      routerLink="/"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        stroke="none"
        style="fill: #f7ac2e;"
      >
        <path
          d="M66 5101 c-62 -42 -69 -67 -63 -219 9 -207 46 -352 141 -547 111 -227 280 -420 492 -562 l60 -41 477 239 c262 132 477 243 477 248 0 4 -24 56 -54 114 -199 392 -550 663 -987 762 -53 12 -138 18 -294 22 -207 4 -222 3 -249 -16z"
        />
        <path
          d="M2479 4301 c-1305 -654 -1639 -825 -1654 -848 -27 -40 -31 -120 -8 -162 26 -50 64 -74 125 -79 l54 -4 1624 812 c894 447 1636 822 1648 833 71 65 70 169 -2 237 -21 19 -39 25 -89 27 l-62 3 -1636 -819z"
        />
        <path
          d="M3635 4208 c-275 -137 -501 -251 -503 -253 -7 -6 55 -160 103 -255 244 -487 687 -825 1235 -941 91 -19 137 -23 337 -23 l233 -1 37 38 38 37 -1 158 c-1 121 -6 181 -23 262 -105 499 -401 912 -841 1174 -52 31 -99 56 -105 55 -5 0 -235 -113 -510 -251z"
        />
        <path
          d="M2499 3640 l-195 -98 -48 -104 c-156 -334 -265 -725 -312 -1118 -21 -178 -24 -591 -5 -760 44 -391 139 -757 283 -1090 101 -232 208 -422 254 -450 42 -27 126 -27 168 0 39 24 133 184 222 380 434 951 441 2039 20 2990 -59 134 -169 343 -181 346 -6 2 -98 -41 -206 -96z"
        />
        <path
          d="M1733 3076 c-543 -574 -616 -1443 -178 -2097 96 -141 307 -371 282 -306 -18 46 -61 195 -86 295 -166 657 -156 1357 29 2011 21 75 43 148 49 164 6 15 7 27 2 27 -5 0 -49 -42 -98 -94z"
        />
        <path
          d="M3291 3143 c24 -63 89 -309 114 -427 102 -498 109 -994 19 -1491 -33 -185 -99 -442 -141 -552 -14 -35 24 -3 112 94 120 132 199 245 270 384 287 561 236 1236 -134 1753 -57 81 -226 266 -242 266 -5 0 -4 -12 2 -27z"
        />
      </g>
    </svg>
  `
})
export class HomeLogoComponent {
  upBtn() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
