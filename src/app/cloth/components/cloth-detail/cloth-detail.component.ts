import { Component, EventEmitter, Input, OnInit, Output, Pipe } from '@angular/core';
import { Cloth } from '../../model/cloth.model';
import {Location} from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AmountToStringPipes } from '../../pipes/amount-to-string-pipe';

@Component({
  selector: 'app-cloth-detail',
  templateUrl: './cloth-detail.component.html',
  styleUrls: ['./cloth-detail.component.css']
})
export class ClothDetailComponent implements OnInit {
  @Input() cloth: Cloth;
  @Input() clothSelected;
  @Input() selectedClothItem;
  @Output() removeSelectedItem = new EventEmitter();

  

  constructor(private amountToStringPipes: AmountToStringPipes) { }

  ngOnInit(): void {
  }

 onClothFullList() {
  this.removeSelectedItem.emit();
 }

}
