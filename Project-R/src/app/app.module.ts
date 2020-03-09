import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';



@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponent
  ],
  imports: [
    HttpClientModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule,
    InputTextareaModule, 
            HttpClientInMemoryWebApiModule.forRoot(
              InMemoryDataService, { dataEncapsulation: false}
            )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
