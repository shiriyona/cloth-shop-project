import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cloth } from '../../model/cloth.model';
import {Location} from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';

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



  constructor(private _location: Location,
    private router: Router) { }

  ngOnInit(): void {
  }

  clothDetails(cloth: Cloth) {
  }

 onClothFullList() {
  this.removeSelectedItem.emit();
 }

}
