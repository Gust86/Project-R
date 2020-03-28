import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: RecipeListComponent,
  },
  {
    path: 'recipe-form/:id',
    component: RecipeFormComponent
  },
  {
    path: 'recipe-form',
    component: RecipeFormComponent
  },
  {
    path: 'detail/:id',
    component: RecipeDetailsComponent
  }
    

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
