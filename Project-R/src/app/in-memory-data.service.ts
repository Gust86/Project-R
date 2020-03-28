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
      ingredients: [{name:'αλάτι'},{name:'κιμάς'},{name:'ζάχαρη'}],
      completionTime: 60,
      complexity: Complexity.Intermediate,
      category: Category.Lunch,
      img: 'https://www.giorgostsoulis.com/media/k2/items/cache/817a0b87c8b4a5b09390d4c2ae24ca96_L.jpg',
      creationDate: new Date(),
      instruction: `Curabitur condimentum velit id sem sagittis blandit.
      Pellentesque et augue sed velit scelerisque dignissim.
      Integer et mi commodo, venenatis libero at, tincidunt justo.
      Nulla dapibus mi quis tortor condimentum eleifend.
      Ut gravida diam luctus volutpat euismod.
      Suspendisse porta tortor non tellus volutpat facilisis.
      Cras viverra nunc a enim luctus bibendum.
      Pellentesque tristique urna eget pharetra condimentum.
      Nullam quis orci sit amet metus hendrerit ultricies eget sed justo.
      Vestibulum accumsan ex nec cursus faucibus.
      Integer posuere justo eu ipsum facilisis, lacinia malesuada eros laoreet.
      Maecenas id est eu lectus dictum placerat.
      Aliquam finibus lectus vitae lorem cursus ultrices.
      Sed maximus ipsum quis enim euismod, eget luctus urna rutrum.
      In consequat dui nec cursus molestie.
      Fusce at nulla a lectus facilisis maximus quis quis tellus.
      Sed at mi a justo aliquam pulvinar quis id ipsum.
      Fusce a enim eget dolor fringilla posuere quis vel massa.
      Curabitur imperdiet quam et pharetra dapibus.
      Morbi lobortis lorem at tortor suscipit, eu dapibus justo rutrum.
      Aliquam rhoncus nisl et venenatis ultricies.
      Aenean eu nibh vel sem feugiat tempus eget ac felis.
      Vestibulum consequat urna et nisi interdum imperdiet.
      Curabitur tristique nibh non posuere consequat.
      Suspendisse eget ipsum a metus imperdiet pellentesque.`
    },{
      id: 2,
      name: 'Μουσακάς',
      ingredients: [{name:'αλάτι'},{name:'ζάχαρη'},{name:'λάδι'}],
      completionTime: 120,
      complexity: Complexity.Beginer,
      category: Category.Lunch,
      img: 'https://www.newsbeast.gr/files/1/2018/03/135149903.jpg',
      creationDate: new Date(),
      instruction: 'Για μουσακά με μελιτζάνες..'
    },{ 
      id: 3,
      name: 'Φασολάκια',
      ingredients: [{name:'αλάτι'},{name:'λάδι'}],
      completionTime: 40,
      complexity: Complexity.Expert,
      category: Category.Dinner,
      img: 'https://www.argiro.gr/wp-content/uploads/2018/05/fasolakia-ladera-kokkinista-768x645.jpg',
      creationDate: new Date(),
      instruction: 'Για φασολάκια λαδερά..'
    },{
      id: 4,
      name: 'Κοτόπουλο στον φούρνο',
      ingredients: [{name:'αλάτι'},{name:'ζάχαρη'},{name:'λάδι'}],
      completionTime: 180,
      complexity: Complexity.Intermediate,
      category: Category.Breakfast,
      img: 'https://s.kathimerini.gr/resources/2016-09/65160118_08460_kathimerino_mpoutakia-kotopoulou-me-patates-thumb-large.jpg',
      creationDate: new Date(),
      instruction: 'Για κοτόπουλο στον φούρνο..'
    },{
      id: 5,
      name: 'Μακαρόνια με κιμά',
      ingredients: [{name:'αλάτι'},{name:'κιμάς'},{name:'λάδι'}],
      completionTime: 10,
      complexity: Complexity.Beginer,
      category: Category.Dinner,
      img: 'https://img-global.cpcdn.com/recipes/49d24b6da67e4128/751x532cq70/%CE%BA%CF%8D%CF%81%CE%B9%CE%B1-%CF%86%CF%89%CF%84%CE%BF%CE%B3%CF%81%CE%B1%CF%86%CE%AF%CE%B1-%CF%83%CF%85%CE%BD%CF%84%CE%B1%CE%B3%CE%AE%CF%82-makaronia-me-kima.jpg',
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
