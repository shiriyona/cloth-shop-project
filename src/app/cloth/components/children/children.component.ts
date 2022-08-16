import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ClothService } from '../../services/cloth.service';

interface Cloth {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
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

  loadChildClothByTypeSubscription: Subscription

  constructor(private clothService: ClothService) { }

  ngOnInit(): void {
    var item = this.clothes.find(x => x.value == "all clothes");
    this.selectTypeOfChildCloth(item);
  }

  clothDetails(cloth: Cloth) {
    this.isSelectedItem = true;
    this.clothSelected = cloth;
  }

  selectTypeOfChildCloth(typeOfCloth) { 
    this.isSelectedItem = false;
    this.clothSelected = null; 
    this.loadChildClothByTypeSubscription = this.clothService.loadChildClothByType(typeOfCloth.value).subscribe(res => {
      this.currentLst = res;
    }); 
    
  }

  ngOnDestroy(): void {
    if(this.loadChildClothByTypeSubscription) {
      this.loadChildClothByTypeSubscription.unsubscribe();
    }
  }

  onRemoveSelectedItem(removeSelectedItem) {
    this.isSelectedItem = false;
    this.clothSelected = null;  
  }

}
