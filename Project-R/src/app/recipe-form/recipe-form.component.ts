import { Component, OnInit } from '@angular/core';
import { Complexity, Ingredient, Category, Recipe } from '../models/recipes';




@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  model: Recipe = null;
  title: string = 'Φόρμα δημιουργίας Συνταγής';
  autoResize: boolean = false;

  complexityDropdown: string[];
  categoryDropdown: string[];
  ingredients: Ingredient[] = [
    {name:'ζάχαρη'}, {name:'λάδι'}, {name:'κιμάς'},
    {name: 'αλάτι'}, {name:'κανέλα'}, {name:'δάφνη'}    
  ]
  
  ngOnInit() {
    this.model = {
      name: '',
      instruction: '',
      category: null,
      completionTime: 0,
      complexity: null,
      creationDate: new Date(),
      img: '',
      ingredients: []
    };
    this.complexityDropdown = Object.keys(Complexity).filter(key => !isNaN(Number(Complexity[key])));
    this.categoryDropdown = Object.keys(Category).filter(key => (Category[key]));
    // TODO: HTTP call to get all ingredients and populate the list
    
  }

  onComplexityChanged(): void {
    setTimeout(() => {
      console.log('Selected: ', this.model.complexity);
    });
  }

  onSave(): void {
    // TODO: HTTP call to the inmemory database
    console.log('Saved!', this.model);
  }

}
