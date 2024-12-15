import { Component } from '@angular/core';
import { collection, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
categoryName: any;
image: any;
shortDescription: any;
firebaseCollectionName: any;
categoryId : any;
categories: any;
updatedData:any;

constructor(public firestore: Firestore, public route: ActivatedRoute, public router: Router){
this.categoryId = route.snapshot.paramMap.get("categoryId")
if (this.categoryId) {
  this.getCategory()}
}

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

const docPath = doc(this.firestore, "categories/" + this.categoryId)
getDoc(docPath).then((category:any) => {
  console.log(category.data())
  this.categoryName = category.data().name
  this.shortDescription = category.data().description
})
}

 edit(){
  let data = {
    name: this.categoryName,
    // image: this.image,
    description: this.shortDescription
  }
  updateDoc(doc(this.firestore, "categories/" + this.categoryId), data).then(res => {
    alert("Your category is updated");
      console.log(res);
      this.router.navigateByUrl("/categories-form/categories-list")
    }).catch(err => {
      console.log(err);
  })
 } 
}
