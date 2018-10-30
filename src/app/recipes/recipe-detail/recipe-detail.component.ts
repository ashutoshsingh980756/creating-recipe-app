import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component ({
    selector: 'recipe-detail-component',
    templateUrl: 'recipe-detail.component.html',
    styleUrls: ['recipe-detail.component.css']
})

export class recipeDetailComponent { 
    @Input() recipe:Recipe
    
}