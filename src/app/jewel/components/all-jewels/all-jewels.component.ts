import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { JewelService } from '../../services/jewel.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';


interface Jewel {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-all-jewels',
  templateUrl: './all-jewels.component.html',
  styleUrls: ['./all-jewels.component.css']
})
export class AllJewelsComponent implements OnInit, OnDestroy {
  @Input() jewelSelected;
  @Input() currentLst;
  @Input() removeSelectedItem;

  isSelectedItem: boolean = false;

  loadJewelTypeByTypeSubscription: Subscription;

  jewels = [
    {value: 'all jewels', viewValue: 'all jewels'},
    {value: 'necklace', viewValue: 'necklace'},
    {value: 'bracelet', viewValue: 'bracelet'},
  ];


  constructor(private jewelService: JewelService) { }

  ngOnInit(): void {
    var item = this.jewels.find(x => x.value == "all jewels");
    this.selectTypeOfJewel(item); 
  }

  jewelDetails(jewel: Jewel) {
    this.isSelectedItem = true;
    this.jewelSelected = jewel
  }

  selectTypeOfJewel(typeOfJewel) {
    this.isSelectedItem = false;  
    this.jewelSelected = null; 
   this.loadJewelTypeByTypeSubscription =  this.jewelService.loadJewelByType(typeOfJewel.value).subscribe(res => {
      this.currentLst = res;
    });
  }

  ngOnDestroy(): void {
      if(this.loadJewelTypeByTypeSubscription) {
        this.loadJewelTypeByTypeSubscription.unsubscribe();
      }
  }

onRemoveSelectedItem(removeSelectedItem) {
  this.isSelectedItem = false;  
  this.jewelSelected = null; 
}

}
