import { Injectable } from '@angular/core';
import { Recipe, Ingredient, Complexity, Category } from './models/recipes';
import { InMemoryDbService } from 'angular-in-memory-web-api'; 

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes: Recipe[] = [{
      name: 'Ντολμαδάκια',
      ingredients: [{name:'αλάτι'},{name:'κιμάς'}],
      completionTime: 60,
      complexity: 3,
      category: Category.Lunch,
      img: '',
      creationDate: new Date(),
      instruction: 'Για τα ντολμαδάκια γιαλαντζί..'
    },{
      name: 'Μουσακάς',
      ingredients: [{name:'αλάτι'},{name:'ζάχαρη'},{name:'λάδι'}],
      completionTime: 120,
      complexity: 4,
      category: Category.Lunch,
      img: '',
      creationDate: new Date(),
      instruction: 'Για μουσακά με μελιτζάνες..'
    },{ 
      name: 'Φασολάκια',
      ingredients: [{name:'αλάτι'},{name:'λάδι'}],
      completionTime: 40,
      complexity: 2,
      category: Category.Dinner,
      img: '',
      creationDate: new Date(),
      instruction: 'Για φασολάκια λαδερά..'
    },{
      name: 'Κοτόπουλο στον φούρνο',
      ingredients: [{name:'αλάτι'},{name:'ζάχαρη'},{name:'λάδι'}],
      completionTime: 180,
      complexity: 2,
      category: Category.Breakfast,
      img: '',
      creationDate: new Date(),
      instruction: 'Για κοτόπουλο στον φούρνο..'
    },{
      name: 'Μακαρόνια με κιμά',
      ingredients: [{name:'αλάτι'},{name:'κιμάς'},{name:'λάδι'}],
      completionTime: 10,
      complexity: 1,
      category: Category.Dinner,
      img: '',
      creationDate: new Date(),
      instruction: 'Για μακαρόνια με κιμά..'
    }];
    const ingredients: Ingredient[] = [
      {name:'ζάχαρη'}, {name:'λάδι'}, {name:'κιμάς'},
      {name: 'αλάτι'}, {name:'κανέλα'}, {name:'δάφνη'}    
    ]
      
    return {
      recipes,
      ingredients
    };
  }

  constructor() { }
}
