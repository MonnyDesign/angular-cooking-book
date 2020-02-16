import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('Beef goulash', 'Make this hearty beef goulash to feed the family on chilly nights. Stir in the soured cream and parsley for an indulgent, crowd-pleasing supper.', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/03/beef-goulash.jpg?itok=Lc4ZDBmy'),
        new Recipe('Cheesy Bacon Breakfast Burrito', 'Burritos are one of those meals that truly never get old. Whether you prefer spicy bean and cheese or salsa-topped steak, there are a million', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-breakfast-burrito-horizontaljpg-1541624805.jpg?resize=480:*')

    ];

    getRecipes(){
        return this.recipes.slice();
    }
}