import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipes';
import { DataService } from '../services/data.service';
import { SearchOrder } from '../models/search';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[];
  totalRecipes: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getRecipe();
  }


  getRecipe(): void {
    this.dataService.getRecipes().subscribe(
      recipes => {
        this.recipeList = recipes;
        this.totalRecipes = this.recipeList.length;
      }
    );
  }

}
