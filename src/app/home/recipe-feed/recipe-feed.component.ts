import { Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-recipe-feed',
  templateUrl: './recipe-feed.component.html',
  styleUrls: ['./recipe-feed.component.css']
})
export class RecipeFeedComponent {
  loader:boolean = false;
  recipe : any;
  firebaseCollectionName: any;

  constructor(public firestore : Firestore){
    this.getRecipe()
  }

  getRecipe(){
    this.firebaseCollectionName = collection(this.firestore, "recipe")
    this.loader = true
    collectionData(this.firebaseCollectionName, { idField: 'id'}).subscribe((recipe: any[]) => {
      this.loader = false
      console.log("Fetched Recipe", recipe);
      this.recipe = recipe;
      console.log(recipe)
    })
  }

  toggleLike(item: any): void {
    item.isLiked = !item.isLiked;
    // Save the state to a database or localStorage
    this.saveLikeStatus(item.id, item.isLiked);
  }
  
  saveLikeStatus(recipeId: number, isLiked: boolean): void {
    // Example: Save to localStorage
    localStorage.setItem(`recipe_${recipeId}_liked`, JSON.stringify(isLiked));
  }
  
}
