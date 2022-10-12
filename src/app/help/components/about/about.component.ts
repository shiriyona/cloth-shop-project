import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {

  imgs=[
      { url: "../../../../assets/img/my-flower.jpg" },
        {url: "https://cdn.pixabay.com/photo/2017/08/05/00/12/girl-2581913__340.jpg" },
        {url: "https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804__340.jpg" }
  ]

  slides$ = new BehaviorSubject<string[]>(['']);

  constructor() { }

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 3 }).map((el, index) => ''));
  }
}
