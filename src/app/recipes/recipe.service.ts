import { EventEmitter, Inject, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingedient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    constructor(private slService: ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Beef goulash', 
            'Make this hearty beef goulash to feed the family on chilly nights. Stir in the soured cream and parsley for an indulgent, crowd-pleasing supper.', 
            'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/03/beef-goulash.jpg?itok=Lc4ZDBmy',
            [
                new Ingredient('Beef meat', 1),
                new Ingredient('Potatoes', 5)
            ]),
        new Recipe(
            'Cheesy Bacon Breakfast Burrito', 
            'Burritos are one of those meals that truly never get old. Whether you prefer spicy bean and cheese or salsa-topped steak, there are a million', 
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-breakfast-burrito-horizontaljpg-1541624805.jpg?resize=480:*',
            [
                new Ingredient('Bacon', 300),
                new Ingredient('Flour Tortilla', 4)
            ])
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredient: Ingredient[]){
        this.slService.addIngrediennts(ingredient);
    }
}