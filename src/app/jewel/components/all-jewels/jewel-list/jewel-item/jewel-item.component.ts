import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jewel } from 'src/app/jewel/model/jewel.model';


@Component({
  selector: 'app-jewel-item',
  templateUrl: './jewel-item.component.html',
  styleUrls: ['./jewel-item.component.css']
})
export class JewelItemComponent implements OnInit {
  @Input() jewel: Jewel;
  @Output() jewelSelected = new EventEmitter<Jewel>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.jewelSelected.emit(this.jewel);
  }

}
