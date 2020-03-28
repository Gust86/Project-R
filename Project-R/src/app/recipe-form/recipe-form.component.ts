import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Complexity, Ingredient, Category, Recipe } from '../models/recipes';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { takeUntil } from 'rxjs/operators';




@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  
  recipeId: number = 0;
  model: Recipe = null;
  title: string = 'Φόρμα δημιουργίας Συνταγής';
  autoResize: boolean = false;

  complexityDropdown: string[];
  categoryDropdown: string[];
  ingredients: Ingredient[];
  recipes: Recipe[];
  recipesCount: number;
  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
    ) {}
  
  ngOnInit() {
    this.route.params
      .pipe()
      .subscribe(params => {
        console.log(+params['id']);
        if(!isNaN(+params['id']))
          (this.recipeId = +params['id']);
      });

    
    if(this.recipeId == 0) {
      this.model = {
        id: null,
        name: '',
        instruction: '',
        category: null,
        completionTime: 0,
        complexity: null,
        creationDate: new Date(),
        img: '',
        ingredients: []
      }
    } else {
      this.getRecipe()
    }
    
    this.complexityDropdown = Object.keys(Complexity).filter(key => !isNaN(Number(Complexity[key])));
    this.categoryDropdown = Object.keys(Category).filter(key => (Category[key]));
    this.getIngredients();
    this.getRecipesCount();
    
  }

   // TODO: HTTP call to the inmemory database
  onSave(): void {
    let isNew = this.model.id == null;
    this.dataService.addRecipe(this.model)
    .subscribe(recipe => {
      this.model = recipe;
      isNew && (this.model.creationDate = new Date(recipe.creationDate));
      // if(isNew) {
      //   (this.model.creationDate = new Date(recipe.creationDate))
      // }
      this.getRecipesCount();
    });
  }
// TODO: HTTP call to get all ingredients and populate the list
  getIngredients(): void {
    this.dataService.getIngredients()
    .subscribe(ingredients => {this.ingredients = ingredients; this.getRecipesCount();})
  }

  getRecipesCount(): void {

    this.dataService.getRecipes()
      .subscribe(recipes => {this.recipes = recipes; this.recipesCount = this.recipes.length})
  }
  getRecipe(): void {
    this.dataService.getRecipeById(this.recipeId)
    .subscribe(recipe => {
      this.model = recipe
      this.model.creationDate = new Date(recipe.creationDate)
    })
  }
}

