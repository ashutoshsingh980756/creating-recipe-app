import {Component, OnInit} from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component ({
    selector: 'recipes-component',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    providers: [RecipeService]
})
export class recipesComponent implements OnInit {
    selectedRecipe:Recipe;

constructor(private recipeService: RecipeService) {

}
ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
        (recipe: Recipe) => {
            this.selectedRecipe = recipe;
        }
    );
}
}