import {Recipe} from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipeChanged = new Subject <Recipe[]>();
    //event emitter
    private recipe: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe', 
        'tasty meat susage', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
      ];

      constructor(private slService: ShoppingListService){}

      setRecipes(recipes: Recipe[]){
          this.recipe = recipes;
          this.recipeChanged.next(this.recipe.slice());
      }

      getRecipes(){
          //slice gives a copy of recipes
          return this.recipe.slice();
      }

      getRecipe(index: number){
          return this.recipe[index];
      }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipe.push(recipe);
        this.recipeChanged.next(this.recipe.slice());

    }
 
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipe[index] = newRecipe;
        this.recipeChanged.next(this.recipe.slice());
    }

    deleteRecipe(index: number){
        this.recipe.splice(index, 1);
        this.recipeChanged.next(this.recipe.slice())
    }

}