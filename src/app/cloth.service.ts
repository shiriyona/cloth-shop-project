import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cloth } from './cloth.model';




@Injectable()
export class ClothService {
  clothesChanged = new Subject<Cloth[]>();

  private clothes: Cloth[] = [
    new Cloth(
      'dress1',
      'A super-beautiful dress - just awesome!',
      'https://cdn.pixabay.com/photo/2016/04/16/19/51/girl-1333640__340.jpg',
  ),
    new Cloth('dress2',
      'What else you need to say?',
      'https://cdn.pixabay.com/photo/2016/04/16/19/51/girl-1333640__340.jpg',
   )
  ];

  // constructor(private slService: ShoppingListService) {}

  // getClothes() {
  //   return this.clothes.slice();
  // }

  // getCloth(index: number) {
  //   return this.clothes[index];
  // }

  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   this.slService.addIngredients(ingredients);
  // }

  onWomen(selectCloth: any) {
    return selectCloth;
    // this.clothes.push();
  }

  onMen() {

  }

  onChildren() {

  }

 


  addCloth(cloth: Cloth) {
    this.clothes.push(cloth);
    this.clothesChanged.next(this.clothes.slice());
  }

  updateCloth(index: number, newRecipe: Cloth) {
    this.clothes[index] = newRecipe;
    this.clothesChanged.next(this.clothes.slice());
  }

  deleteCloth(index: number) {
    this.clothes.splice(index, 1);
    this.clothesChanged.next(this.clothes.slice());
  }
}
