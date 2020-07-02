import { Ingredient } from '../shared/ingedient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
    private ingredients: Ingredient[] = [
        new Ingredient ('bacon', 6),
        new Ingredient ('apple', 4)
    ]; 

    printIngredients(){
       return this.ingredients.slice();
 
    }

    addIngredient(ingedient: Ingredient){
       this.ingredients.push(ingedient);
       this.ingredientsChanged.emit(this.ingredients.slice());
    } 

    addIngrediennts(ingredients: Ingredient[]){
        // for(let ingedient of ingredients){
        //     this.addIngredient(ingedient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice()); 
    }
} 