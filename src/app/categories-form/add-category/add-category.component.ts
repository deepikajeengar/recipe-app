import { Component } from '@angular/core';
import { collection, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
loader : boolean = false;
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
  this.loader = true;
let data = {
  name: this.categoryName,
  // image: this.image,
  description: this.shortDescription
}

this.firebaseCollectionName = collection(this.firestore, "categories")

addDoc(this.firebaseCollectionName,data).then(res=>{
  this.loader = false;
  Swal.fire("Category added successfully!");
  this.router.navigateByUrl("/categories-form/categories-list")
  this.categoryName = null
  this.image = null
  this.shortDescription = null;
}).catch((error) => {
  console.error("Error adding category:", error);
}); 
}

getCategory(){
this.loader = true
const docPath = doc(this.firestore, "categories/" + this.categoryId)
getDoc(docPath).then((category:any) => {
  this.loader = false
  console.log(category.data())
  this.categoryName = category.data().name
  this.shortDescription = category.data().description
})
}

 edit(){
  this.loader = true
  let data = {
    name: this.categoryName,
    // image: this.image,
    description: this.shortDescription
  }
  updateDoc(doc(this.firestore, "categories/" + this.categoryId), data).then(res => {
    this.loader = false
    Swal.fire("Your category is updated");
      console.log(res);
      this.router.navigateByUrl("/categories-form/categories-list")
    }).catch(err => {
      console.log(err);
      Swal.fire("Error getting your category!")
  })
 } 
}
