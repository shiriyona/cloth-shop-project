import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


interface Cloth {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  selectedValue: string;
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
  onClothes(cloth) {
    this.router.navigate(['/clothes-list']);
  }

  

}
