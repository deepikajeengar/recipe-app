import { Component } from '@angular/core';
import { addDoc, collectionData, doc, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})
export class AddRecipeFormComponent {
  loader : boolean = false;
  recipeName: any;
  instruction: any;
  image: any;
  category: any;
  firebaseCollectionName: any;
  categories: any;
  recipeId: any;

  constructor(public firestore: Firestore, public route: ActivatedRoute, public router: Router) {
    this.recipeId = route.snapshot.paramMap.get("recipeId")
    this.getCategories()
    if(this.recipeId){
      this.getRecipe()
    }   

  }

  addRecipe() {
    this.loader = true
    let data = {
      name: this.recipeName,
      instruction: this.instruction,
      // image: this.image,
      category: this.category,
      userId: JSON.parse(localStorage.getItem("userDetails") as string)
    }
 console.log(data)
    this.firebaseCollectionName = collection(this.firestore, "recipe")

    addDoc(this.firebaseCollectionName, data).then(res => {
      this.loader = false
      Swal.fire("Recipe added successfully");
      this.router.navigateByUrl("/home")
      this.recipeName = null,
        this.instruction = null,
        this.image = null,
        this.category = null
    }).catch((error) => {
      console.error("Error adding recipe", error)
    });
  }

 

getCategories(){
  this.loader = true
  this.firebaseCollectionName = collection(this.firestore, "categories")
  
  collectionData(this.firebaseCollectionName, { idField: 'id'}).subscribe((categories) => {
    this.loader = false
    console.log("Fetched Categories", categories);
    this.categories = categories;
  })
}

updateRecipe(){
  this.loader = true
  let data = {
    name: this.recipeName,
    instruction: this.instruction,
    // image: this.image,
    category: this.category,
    userId: JSON.parse(localStorage.getItem("userDetails") as string)
  }
  updateDoc(doc(this.firestore, "recipe/" + this.recipeId), data).then(res =>{
    this.loader = false
    Swal.fire("Your recipe is updated")
    this.router.navigateByUrl("/user-dashboard")
    console.log(res)
  })
}

getRecipe() {
  this.loader = true
  const docPath = doc(this.firestore, "recipe/"+this.recipeId)
  getDoc(docPath).then((recipe:any)=>{
    this.loader = false
    console.log(recipe)
    console.log(recipe.data())
 const recipeDetails = recipe.data();
 console.log(recipeDetails)
 this.recipeName = recipeDetails.name
 this.category = recipeDetails.category
 this.instruction = recipeDetails.instruction
  })
}

}
