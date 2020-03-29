import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, fromEventPattern, of } from 'rxjs';
import { Recipe, Ingredient } from '../models/recipes';
import { catchError, map, tap } from 'rxjs/operators';
import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';

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
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl)
      .pipe(
        catchError(err => this.catchBadResponse(err))
      );    
  }
  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientsUrl).pipe(
      map(items => items),
      catchError(err => this.catchBadResponse(err))
    );
  }
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipeUrl, recipe, this.httpOptions).pipe(
      map(item => item),
      tap((newRecipe: Recipe) => this.messageService.add({severity:'success', summary:'Τσελεμεντές', detail:'Η Συνταγή Προστέθηκε με επιτυχία!'})),
      catchError(err => this.catchBadResponse(err))
    );
  }
  catchBadResponse(error: HttpErrorResponse | any): Observable<any> {
    this.messageService.add({severity:'error', summary:'Τσελεμεντές', detail:'Κάτι Πήγε Στραβά!' + error});
    return of(false);
  }
  getRecipeById(id: number): Observable<Recipe> {
    const url = `${this.recipeUrl}/${id}`;
    return this.http.get<Recipe>(url).pipe(
      catchError(err => this.catchBadResponse(err))
    );
  }
  deleteRecipe(recipe: Recipe): Observable<Recipe> {
    const id = recipe.id;
    const url = `${this.recipeUrl}/${id}`;
    return this.http.delete<Recipe>(url).pipe(
      map(items => items),
      tap(_ => console.log(`deleted recipe id: ${id}`)),
      tap((newRecipe: Recipe) => this.messageService.add({severity:'warn', summary:'Τσελεμεντές', detail:'Η συνταγή Διαγράφηκε!'})),
      catchError(err => this.catchBadResponse)
    );
  }


}
