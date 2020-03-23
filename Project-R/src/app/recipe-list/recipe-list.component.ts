import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipes';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getRecipe();
  }


  getRecipe(): void {
    this.dataService.getRecipes().subscribe(
      recipes => this.recipeList = recipes
    );
  }

}
