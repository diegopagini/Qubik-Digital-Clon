import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const myOwnSwiper = new Swiper('.swiper-containerx', {
      slidesPerView: 1,
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        600: {
          slidesPerView: 4,
        },
      },
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: false,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
