import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  title: string = 'Φόρμα δημιουργίας Συνταγής';

 


  constructor() {}
    

  ngOnInit() {
  }

}
