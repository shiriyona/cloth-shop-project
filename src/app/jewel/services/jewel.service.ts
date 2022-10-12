import { Observable, of, Subscription, subscribeOn } from "rxjs";
import { Jewel } from "../model/jewel.model";




export class JewelService {

    private necklaces: Jewel[] = [
        new Jewel('jewel1',
        'this is necklace1 description',
        'https://cdn.pixabay.com/photo/2017/08/02/01/34/pocket-watch-2569573__340.jpg' ,
        3    
    ),
        new Jewel('jewel2',
        'this is necklace2 description',
        'https://cdn.pixabay.com/photo/2016/03/03/17/25/beads-1234666__340.jpg', 
        50
    ),
    new Jewel('jewel3',
    'this is necklace3 description',
    'https://cdn.pixabay.com/photo/2017/08/06/05/19/invitation-2589041__340.jpg', 
    0
)
    ];

    private bracelets: Jewel[] = [
        new Jewel('bracelet1',
        'this is bracelet1 description',
        'https://cdn.pixabay.com/photo/2014/03/06/21/57/coffer-281253__340.jpg',
        0  
    ),
        new Jewel('bracelet2',
        'this is necklace2 description',
        'https://cdn.pixabay.com/photo/2018/05/10/20/03/love-3388626__340.jpg',
        100   
    ),
        new Jewel('bracelet3',
        'this is necklace3 description',
        'https://cdn.pixabay.com/photo/2016/02/13/22/48/bracelet-1198737_960_720.jpg',
        100   
        )
    ];
    allJewels;

    allItem() {
       this.allJewels = this.allJewels.push(Jewel, this.bracelets, this.necklaces);

    }
   
 



    loadJewelByType(jewelType):Observable<any>  { 
        switch(jewelType) {
            case 'all jewels': 
            return of([...this.necklaces, ...this.bracelets]);
            console.log()
            case 'all jewels': return of(this.allJewels.slice())
            case 'necklace': return of(this.necklaces.slice()); 
            case 'bracelet': return of(this.bracelets.slice());
        }
    }
}