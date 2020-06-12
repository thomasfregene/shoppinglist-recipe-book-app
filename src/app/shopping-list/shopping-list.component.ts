import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]; 
  //adding custom subscription(subject)
  private subscription: Subscription;

  //injecting service
  constructor(private slService: ShoppingListService) { }

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientChanged
    .subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);

  }
  
  //on destroy to step out of an observable and prevent memory leaks
  //since we use a custom subject
  ngOnDestroy(){
    this.subscription.unsubscribe
  }
  

}
