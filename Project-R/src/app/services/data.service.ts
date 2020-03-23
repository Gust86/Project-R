import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, fromEventPattern, of } from 'rxjs';
import { Recipe, Ingredient } from '../models/recipes';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private recipeUrl = 'api/recipes';
  private ingredientsUrl = 'api/ingredients'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }


  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl)
      .pipe(
        catchError(this.handleError<Recipe[]>('getRecipes',[]))
      );    
  }
  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientsUrl).pipe(
      map(items => items),
      catchError(err => this.catchBadResponse(err))
    );
      // .pipe(
      //   catchError(this.handleError<Ingredient[]>('getIngredients',[]))
      // );    
  }
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipeUrl, recipe, this.httpOptions).pipe(
      map(item => item),
      tap((newRecipe: Recipe) => console.log(`recipe ${newRecipe.name} added`)),
      catchError(this.handleError<Recipe>('addRecipe'))
    );
  }
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error);
      return of(result as T);
    };
  }

  catchBadResponse(error: HttpErrorResponse | any): Observable<any> {
    return of(false);
  }


}
