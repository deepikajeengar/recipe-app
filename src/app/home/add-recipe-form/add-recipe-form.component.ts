import { Component } from '@angular/core';
import { addDoc, collectionData, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})
export class AddRecipeFormComponent {
  recipeName: any;
  instruction: any;
  image: any;
  category: any;
  firebaseCollectionName: any;
  categories: any;

  constructor(public firestore: Firestore) {
    this.getCategories()
  }

  addRecipe() {
    let data = {
      name: this.recipeName,
      instruction: this.instruction,
      // image: this.image,
      category: this.category
    }
 console.log(data)
    this.firebaseCollectionName = collection(this.firestore, "recipe")

    addDoc(this.firebaseCollectionName, data).then(res => {
      console.log("Recipe added successfully");
      this.recipeName = null,
        this.instruction = null,
        this.image = null,
        this.category = null
    }).catch((error) => {
      console.error("Error adding recipe", error)
    });
  }

 

getCategories(){
  this.firebaseCollectionName = collection(this.firestore, "categories")
  
  collectionData(this.firebaseCollectionName, { idField: 'id'}).subscribe((categories) => {
    console.log("Fetched Categories", categories);
    this.categories = categories;
  })
}
}
