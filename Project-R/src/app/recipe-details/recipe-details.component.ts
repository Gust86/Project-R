import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipes';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getRecipe()
  }
  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getRecipeById(id).subscribe(recipe => {
      this.recipe = recipe
      this.recipe.creationDate = new Date(recipe.creationDate)
    });
  }
}
