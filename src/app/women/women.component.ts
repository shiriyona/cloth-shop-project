import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { Cloth } from '../cloth.model';

import { ClothService } from '../cloth.service';

interface Cloth {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  electedValue: string;
  selectedCloth: any;

  
  clothes: Cloth[] = [
    {value: 'dresses', viewValue: 'dresses'},
    {value: 'shirts', viewValue: 'shirts'},
    {value: 'shoes', viewValue: 'shoes'},
  ];
  subscription: Subscription;


  constructor(private clothService: ClothService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    
  }

  // ngOnInit(): void {
  //   this.subscription = this.clothService.clothesChanged
  //     .subscribe(
  //       (clothes: Cloth[]) => {
  //         this.clothes = clothes;
  //       }
  //     );
  //   this.clothes = this.clothService.getClothes();
  // }

  onClothes(selectedCloth: any) {
    this.router.navigate(['/clothes-list']);
    this.selectedCloth = this.clothService.onWomen(selectedCloth);
  }
  // onCloth(cloth) {
  //   this.router.navigate(['/clothes-list']);
  // }


}
