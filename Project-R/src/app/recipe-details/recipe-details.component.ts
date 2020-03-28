import { Component, OnInit, Input } from '@angular/core';
import { Recipe, Ingredient } from '../models/recipes';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 recipe: Recipe;
 
 
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getRecipeById(id).subscribe(recipe => {
      this.recipe = recipe
      this.recipe.creationDate = new Date(recipe.creationDate)
    });
  }
  goBack(): void {
    this.location.back()
  }
}
