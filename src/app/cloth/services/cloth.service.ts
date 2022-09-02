import { SlicePipe } from '@angular/common';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of, Subject, subscribeOn, Subscription } from 'rxjs';
import { Cloth, Cloth as WomanDress } from '../model/cloth.model';
import { Cloth as WomanShirt } from '../model/cloth.model';
import { Cloth as WomanShoe } from '../model/cloth.model';
import { Cloth as ManShirt } from '../model/cloth.model';
import { Cloth as ManShoe } from '../model/cloth.model';
import { Cloth as ManPant } from '../model/cloth.model';
import { Cloth as ChildShirt } from '../model/cloth.model';
import { Cloth as ChildShoe } from '../model/cloth.model';
import { Cloth as ChildPant } from '../model/cloth.model';



export class ClothService {
  clothSelected = new EventEmitter<Cloth>();
  
  

  private womenDresses: WomanDress[] = [
    new WomanDress(
      'dress1',
      'this is dress1 description',
      'https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004__340.jpg',
      9
  ),
    new WomanDress('dress2',
      'this is dress2 description',
      'https://cdn.pixabay.com/photo/2017/05/12/08/27/gothic-2306457__340.jpg',
      0
   ),
   new WomanDress(
    'dress3',
    'this is dress3 description',
    'https://cdn.pixabay.com/photo/2018/02/24/20/41/woman-3179182__340.jpg',
    100
   )
  ];

  private womenShirts: WomanShirt[] = [
    new WomanShirt(
      'shirt1',
      'this is shirt1 description',
      'https://cdn.pixabay.com/photo/2017/09/18/19/22/fashion-2762909_960_720.jpg',
      100
  ),
    new WomanShirt('shirt2',
      'this is shirt2 description',
      'https://cdn.pixabay.com/photo/2015/07/10/16/17/girl-839613__340.jpg',
      8
   ),
   new WomanShirt(
    'shirt3',
    'this is shirt3 description',
    'https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_960_720.jpg',
    0
   )
  ];

  private womenShoes: WomanShoe[] = [
    new WomanShoe(
      'shoe1',
      'this is shoe1 description',
      'https://cdn.pixabay.com/photo/2016/11/21/16/55/high-heels-1846436__340.jpg',
      0
  ),
    new WomanShoe('shoe2',
      'this is shoe2 description',
      'https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687__340.jpg',
      100
   ),
   new WomanShoe('shoe3',
   'this is shoe3 description',
   'https://cdn.pixabay.com/photo/2016/11/29/13/38/alone-1869914_960_720.jpg',
   100
  )
  ];


  private menShirts: ManShirt[] = [
    new ManShirt(
      'shirt1',
      'this is shirt1 description',
      'https://cdn.pixabay.com/photo/2015/09/09/22/02/shirt-933671__340.jpg',
      4
    ),
    new ManShirt(
      'shirt2',
      'this is shirt2 description',
      'https://cdn.pixabay.com/photo/2022/06/21/08/57/male-7275449__340.jpg',
      100
    ),
    new ManShirt(
      'shirt3',
      'this is shirt3 description',
      'https://cdn.pixabay.com/photo/2015/09/01/05/45/stylish-916502__340.jpg',
      100
    )
  ];

  private menpants: ManPant[] = [
    new ManPant(
      'pant1',
      'this is pant1 description',
      'https://cdn.pixabay.com/photo/2016/11/29/09/41/bag-1868758__340.jpg',
      100
    ),
    new ManPant(
      'pant2',
      'this is pant3 description',
      'https://cdn.pixabay.com/photo/2015/06/19/09/39/lonely-814631__340.jpg',
      100
    ),
    new ManPant(
      'pant3',
      'this is pant3 description',
      'https://cdn.pixabay.com/photo/2015/09/06/01/03/white-926838__340.jpg',
      100
    )
  ];

  private menshoes: ManShoe[] = [
    new ManShoe(
      'shoe1',
      'this is shoe1 description',
      'https://cdn.pixabay.com/photo/2020/06/21/21/53/skateboard-5326930__340.jpg',
      100
    ),
    new ManShoe(
      'shoe2',
      'this is shoe2 description',
      'https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873_960_720.jpg',
      100
    ),
    new ManShoe(
      'shoe3',
      'this is shoe3 description',
      'https://cdn.pixabay.com/photo/2016/10/18/08/13/travel-1749508__340.jpg',
      0
    )
  ];

  private childrenShirts: ChildShirt[] = [
    new ChildShirt(
      'shirt1',
      'this is shirt1 description',
      'https://cdn.pixabay.com/photo/2021/03/06/11/30/baby-6073539__340.jpg',
      100
    ),
    new ChildShirt(
      'shirt2',
      'this is shirt2 description',
      'https://cdn.pixabay.com/photo/2014/03/05/16/08/hairstyle-280169_960_720.jpg',
      100
    ),
    new ChildShirt(
      'shirt3',
      'this is shirt3 description',
      'https://cdn.pixabay.com/photo/2015/07/28/09/18/girl-864107__180.jpg',
      100
    )
  ];


  private childrenpants: ChildPant[] = [
    new ChildPant(
      'pant1',
      'this is pant1 description',
      'https://cdn.pixabay.com/photo/2015/10/09/17/54/boy-979681__340.jpg',
      100
    ),
    new ChildPant(
      'pant2',
      'this is pant2 description',
      'https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687__340.jpg',
      100
    ),
    new ChildPant(
      'pant2',
      'this is pant2 description',
      'https://cdn.pixabay.com/photo/2020/07/12/11/03/jeans-5396899__340.jpg',
      100
    )
  ];

  private childrenshoes: ChildShoe[] = [
    new ChildShoe(
      'shoe1',
      'this is shoe1 description',
      'https://cdn.pixabay.com/photo/2016/07/13/09/37/baby-shoes-1514007__340.jpg',
      100
    ),
    new ChildShoe(
      'shoe2',
      'this is shoe2 description',
      'https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596__340.jpg',
      100
    ),
    new ChildShoe(
      'shoe3',
      'this is shoe3 description',
      'https://cdn.pixabay.com/photo/2020/03/12/19/56/baby-shoes-4926111__340.jpg',
      100
    )   
  ];
 
 loadWomanClothByType(clothType):Observable<any> {
  switch(clothType) {
    case 'all clothes': 
    return of([...this.womenDresses, ...this.womenShirts, ...this.womenShoes]);
    console.log()
    case 'dresses': return of(this.womenDresses.slice());
    case 'shirts': return of(this.womenShirts.slice());
    case 'shoes': return of(this.womenShoes.slice());    
  } 
}

loadManClothByType(clothType):Observable<any>{
  switch(clothType) {
    case 'all clothes': 
    return of([...this.menShirts, ...this.menpants, ...this.menshoes]);
    console.log()
    case 'shirts': return of(this.menShirts.slice());
    case 'pants': return of(this.menpants.slice());
    case 'shoes': return of(this.menshoes.slice());
  }
}

loadChildClothByType(clothType):Observable<any>{
  switch(clothType) {
    case 'all clothes': 
    return of([...this.childrenShirts, ...this.childrenpants, ...this.childrenshoes]);
    console.log()
    case 'shirts': return of(this.childrenShirts.slice());
    case 'pants': return of(this.childrenpants.slice());
    case 'shoes': return of(this.childrenshoes.slice());
  }
}



}

