import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClothService } from '../../services/cloth.service';


interface Cloth {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  selectedValue: string;
  @Input() currentLst;
  @Input() selectedClothItem =[];
  @Input() clothSelected;
  @Input() removeSelectedItem;

  isSelectedItem: boolean = false;

  clothes: Cloth[] = [
    {value: 'all clothes', viewValue: 'all clothes'},
    {value: 'pants', viewValue: 'pants'},
    {value: 'shirts', viewValue: 'shirts'},
    {value: 'shoes', viewValue: 'shoes'},
  ];

  loadManClothByTypeSubscription: Subscription;

  constructor(private clothService: ClothService) { }

  ngOnInit(): void {
    var item = this.clothes.find(x => x.value == "all clothes");
    this.selectTypeOfManCloth(item);
  }

  clothDetails(cloth: Cloth) {
    this.isSelectedItem = true;
    this.clothSelected = cloth;
  }

  selectTypeOfManCloth(typeOfCloth) {
    this.isSelectedItem = false;
      this.clothSelected = null; 
     this.loadManClothByTypeSubscription = this.clothService.loadManClothByType(typeOfCloth.value).subscribe(res => {
      this.currentLst = res;
    });
  }

  ngOnDestroy(): void {
    if(this.loadManClothByTypeSubscription) {
      this.loadManClothByTypeSubscription.unsubscribe();
    }
}

onRemoveSelectedItem(removeSelectedItem) {
  this.isSelectedItem = false;  
  this.clothSelected = null; 
}

}
