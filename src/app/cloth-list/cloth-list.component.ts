import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Cloth } from '../cloth.model';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-cloth-list',
  templateUrl: './cloth-list.component.html',
  styleUrls: ['./cloth-list.component.css']
})
export class ClothListComponent implements OnInit {
  subscription: Subscription;
  clothes: Cloth[];

  constructor(private clothService: ClothService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.subscription = this.clothService.clothesChanged
    //   .subscribe(
    //     (clothes: Cloth[]) => {
    //       this.clothes = clothes;
    //     }
    //   );
    // this.clothes = this.clothService.getClothes();
  }

  // clothType() {
  //   this.clothService.onWomen();
  // }

  onNewCloth() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
