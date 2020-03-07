import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';



@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponent
  ],
  imports: [
    InputTextModule,
    BrowserModule,
    AppRoutingModule,
    InputTextareaModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
