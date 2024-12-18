import { Component } from '@angular/core';
import { collection, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  loader : boolean = false;
recipeId: any;
recipeDetails: any;

constructor(public firestore:Firestore,public route: ActivatedRoute){
  this.recipeId = route.snapshot.paramMap.get("recipeId")
  console.log(this.recipeId)
  this.getRecipe()
}

getRecipe() {
  this.loader = true;
  const docPath = doc(this.firestore, "recipe/"+this.recipeId)
  getDoc(docPath).then((recipe:any)=>{
    this.loader = false;
    console.log(recipe)
    console.log(recipe.data())
 this.recipeDetails = recipe.data();
 console.log(this.recipeDetails)
  })
}
}
