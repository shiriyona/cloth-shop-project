import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cloth } from 'src/app/cloth/model/cloth.model';


@Component({
  selector: 'app-cloth-list',
  templateUrl: './cloth-list.component.html',
  styleUrls: ['./cloth-list.component.css']
})
export class ClothListComponent implements OnInit {
  @Input() clothes: Cloth[];
  @Output() clothSelected = new EventEmitter<Cloth>();
  isSelectedItem: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseClothIcon() {
    this.isSelectedItem = false;
  }

  onClothItemSelected(cloth: Cloth) {
    this.isSelectedItem = true;
    this.clothSelected.emit(cloth);
  }

}

