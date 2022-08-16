import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Cloth } from 'src/app/cloth/model/cloth.model';


@Component({
  selector: 'app-cloth-item',
  templateUrl: './cloth-item.component.html',
  styleUrls: ['./cloth-item.component.css']
})
export class ClothItemComponent implements OnInit {
  @Input() cloth: Cloth;
  @Output() clothSelected = new EventEmitter<Cloth>();


  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.clothSelected.emit(this.cloth);
  }




}
