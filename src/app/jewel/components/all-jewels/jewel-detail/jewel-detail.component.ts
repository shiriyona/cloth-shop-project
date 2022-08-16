import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jewel } from 'src/app/jewel/model/jewel.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jewel-detail',
  templateUrl: './jewel-detail.component.html',
  styleUrls: ['./jewel-detail.component.css']
})
export class JewelDetailComponent implements OnInit {
  @Input() jewel: Jewel;
  @Input() jewelSelected;
  @Input() selectedJewelItem =[];
  @Output() removeSelectedItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  jewelDetails(jewel: Jewel) {
    this.selectedJewelItem.push(jewel);
  }
  
 onJewelFullList() {
  this.removeSelectedItem.emit();
 }

}
