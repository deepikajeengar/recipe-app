import { Component } from '@angular/core';
import { collection, collectionData, doc, Firestore, query, updateDoc, where } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes : any;
  firebaseCollectionName: any;
  categoryId:any;
  categoryName:any;

  constructor(public firestore : Firestore,public route:ActivatedRoute){
    this.categoryId = route.snapshot.paramMap.get("categoryId")
    console.log('categoryId',this.categoryId)
    this.categoryName = route.snapshot.paramMap.get("categoryName")
    console.log('categoryName', this.categoryName)
    this.getRecipe()
  }

  getRecipe(){
    this.firebaseCollectionName = collection(this.firestore, "recipe")
    const firebaseQurey = query(this.firebaseCollectionName,where("category","==",this.categoryId))
    collectionData(firebaseQurey, { idField: 'id'}).subscribe((recipes: any) => {
      console.log("Fetched Recipe", recipes);
      this.recipes = recipes;
    })
  }


}
