import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  electedValue: string;
  selectedCloth: string;
  
  clothes: Cloth[] = [
    {value: 'pants', viewValue: 'pants'},
    {value: 'shirts', viewValue: 'shirts'},
    {value: 'shoes', viewValue: 'shoes'},
  ];

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClothes() {
    this.router.navigate(['/clothes-list']);
  }

}
