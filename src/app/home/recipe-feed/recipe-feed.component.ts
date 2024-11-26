import { Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-recipe-feed',
  templateUrl: './recipe-feed.component.html',
  styleUrls: ['./recipe-feed.component.css']
})
export class RecipeFeedComponent {
  recipe : any;
  firebaseCollectionName: any;

  constructor(public firestore : Firestore){
    this.getRecipe()
  }

  getRecipe(){
    this.firebaseCollectionName = collection(this.firestore, "recipe")
    
    collectionData(this.firebaseCollectionName, { idField: 'id'}).subscribe((recipe: any[]) => {
      console.log("Fetched Recipe", recipe);
      this.recipe = recipe;
    })
  }
}
