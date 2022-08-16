import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClothService } from '../../services/cloth.service';

interface Cloth {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit, OnDestroy {
  @Input() currentLst;
  @Input() selectedClothItem =[];
  @Input() clothSelected;
  @Input() removeSelectedItem;
  
  isSelectedItem: boolean = false;
  

  clothes: Cloth[] = [
    {value: 'all clothes', viewValue: 'all clothes'},
    {value: 'dresses', viewValue: 'dresses'},
    {value: 'shirts', viewValue: 'shirts'},
    {value: 'shoes', viewValue: 'shoes'},
  ];

  loadWomanClothByTypeSubscription: Subscription;

  constructor(private clothService: ClothService) { }
  
   ngOnInit(): void {
    var item = this.clothes.find(x => x.value == "all clothes");
    this.selectTypeOfWomanCloth(item);
  }

  clothDetails(cloth: Cloth) {
    this.isSelectedItem = true;
    this.clothSelected = cloth;
  }

  selectTypeOfWomanCloth(typeOfCloth) { 
    this.isSelectedItem = false;
    this.clothSelected = null; 
    this.loadWomanClothByTypeSubscription = this.clothService.loadWomanClothByType(typeOfCloth.value).subscribe(res => {
      this.currentLst = res;
    });
   
  }
  
  ngOnDestroy(): void {
      if(this.loadWomanClothByTypeSubscription) {
        this.loadWomanClothByTypeSubscription.unsubscribe();
      }
  }

  onRemoveSelectedItem(removeSelectedItem) {
    this.isSelectedItem = false; 
    this.clothSelected = null;  
  }

}
