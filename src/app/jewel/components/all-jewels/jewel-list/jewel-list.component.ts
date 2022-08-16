import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jewel } from 'src/app/jewel/model/jewel.model';

@Component({
  selector: 'app-jewel-list',
  templateUrl: './jewel-list.component.html',
  styleUrls: ['./jewel-list.component.css']
})
export class JewelListComponent implements OnInit {
  @Input() jewels: Jewel[];
  @Output() jewelSelected = new EventEmitter<Jewel>();

  isSelectedItem: boolean = false;
 
  constructor() { }

  ngOnInit(): void {
  }

  onJewelItemSelected(jewel: Jewel) {
    this.isSelectedItem = true;
    this.jewelSelected.emit(jewel);
  }

}
