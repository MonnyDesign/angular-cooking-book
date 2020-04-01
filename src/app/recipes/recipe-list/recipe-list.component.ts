import { Component, OnInit } from '@angular/core';

// Models
import { Recipe } from '../recipe.model';

// Services
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {
    recipes: Recipe[];
 
    constructor(private recipeService: RecipeService){ }

    ngOnInit(){
        this.recipes = this.recipeService.getRecipes();
    }
}