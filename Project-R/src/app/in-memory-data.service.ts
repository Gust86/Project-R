import { Injectable } from '@angular/core';
import { Recipe, Ingredient, Complexity, Category } from './models/recipes';
import { InMemoryDbService } from 'angular-in-memory-web-api'; 

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes: Recipe[] = [{
      id: 1,
      name: 'Ντολμαδάκια',
      ingredients: [{name:'αλάτι'},{name:'κιμάς'}],
      completionTime: 60,
      complexity: Complexity.Intermediate,
      category: Category.Lunch,
      img: '',
      creationDate: new Date(),
      instruction: 'Για τα ντολμαδάκια γιαλαντζί..'
    },{
      id: 2,
      name: 'Μουσακάς',
      ingredients: [{name:'αλάτι'},{name:'ζάχαρη'},{name:'λάδι'}],
      completionTime: 120,
      complexity: Complexity.Beginer,
      category: Category.Lunch,
      img: '',
      creationDate: new Date(),
      instruction: 'Για μουσακά με μελιτζάνες..'
    },{ 
      id: 3,
      name: 'Φασολάκια',
      ingredients: [{name:'αλάτι'},{name:'λάδι'}],
      completionTime: 40,
      complexity: Complexity.Expert,
      category: Category.Dinner,
      img: '',
      creationDate: new Date(),
      instruction: 'Για φασολάκια λαδερά..'
    },{
      id: 4,
      name: 'Κοτόπουλο στον φούρνο',
      ingredients: [{name:'αλάτι'},{name:'ζάχαρη'},{name:'λάδι'}],
      completionTime: 180,
      complexity: Complexity.Intermediate,
      category: Category.Breakfast,
      img: '',
      creationDate: new Date(),
      instruction: 'Για κοτόπουλο στον φούρνο..'
    },{
      id: 5,
      name: 'Μακαρόνια με κιμά',
      ingredients: [{name:'αλάτι'},{name:'κιμάς'},{name:'λάδι'}],
      completionTime: 10,
      complexity: Complexity.Beginer,
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
