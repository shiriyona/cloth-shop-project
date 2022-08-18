import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Imag as Imag } from '../../model/help.model';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {


  

  // imgs = [
   
  //    'https://cdn.pixabay.com/photo/2015/10/09/17/54/boy-979681__340.jpg'
  //   ,
   
  //     'https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687__340.jpg',
    
    
  //     'https://cdn.pixabay.com/photo/2020/07/12/11/03/jeans-5396899__340.jpg'
    
  // ];



//   imgs = '{"https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_960_720.jpg"}'
//   '{"https://cdn.pixabay.com/photo/2017/08/05/00/12/girl-2581913__340.jpg"}',
//   '{"https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804__340.jpg"}',
//   '{"https://dem6zw593uib1.cloudfront.net/content/images/backgrounds/minimal/bg20.jpg"}',
//   '{"http://oi65.tinypic.com/2mzchw4.jpg'}',
//  '{'https://img1.goodfon.ru/original/1680x1050/1/f5/firewatch-igra-minimalizm.jpg"}';

  imgs=[
      { url: "https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_960_720.jpg" },
        {url: "https://cdn.pixabay.com/photo/2017/08/05/00/12/girl-2581913__340.jpg" },
        {url: "https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804__340.jpg" }
  ]



  slides$ = new BehaviorSubject<string[]>(['']);


  constructor() { }

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 3 }).map((el, index) => `Slide ${index + 1+ this.imgs.length}`)
     
   
        
    );

  

    
  }

  

}
