import { Component, Input, Output, OnInit } from '@angular/core';
import { Cloth } from '../../cloth.model';
import { ClothService } from 'src/app/cloth.service';

@Component({
  selector: 'app-cloth-item',
  templateUrl: './cloth-item.component.html',
  styleUrls: ['./cloth-item.component.css']
})
export class ClothItemComponent implements OnInit {
  @Input() cloth: Cloth;
  @Input() number: number;
  @Input() clothes: Cloth[] = [
  new Cloth('dress1', 'this is a test dress1 description', 'https://cdn.pixabay.com/photo/2016/11/19/17/45/woman-1840538__340.jpg'),
  new Cloth('dress2', 'this is a test dress2 description', 'https://cdn.pixabay.com/photo/2016/11/19/17/45/woman-1840538__340.jpg'),
  ];

  @Output() selectCloth



  constructor() { }

  ngOnInit(): void {
  }

}
