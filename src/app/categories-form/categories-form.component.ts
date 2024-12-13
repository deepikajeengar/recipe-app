import { Component } from '@angular/core';
import { collection } from '@angular/fire/firestore';
import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent {
categoryName: any;
image: any;
shortDescription: any;
firebaseCollectionName: any;

constructor(public firestore: Firestore){}

addCategory(){
let data = {
  name: this.categoryName,
  // image: this.image,
  description: this.shortDescription
}

this.firebaseCollectionName = collection(this.firestore, "categories")

addDoc(this.firebaseCollectionName,data).then(res=>{
  console.log("Category added successfully!");
  this.categoryName = null
  this.image = null
  this.shortDescription = null;
}).catch((error) => {
  console.error("Error adding category:", error);
  
}); 
}

getCategory(){
this.firebaseCollectionName = collection(this.firestore, "categories")

collectionData(this.firebaseCollectionName, { idField: 'id' }).subscribe((categories) => {
  console.log("Fetched categories:", categories);})
}
}
