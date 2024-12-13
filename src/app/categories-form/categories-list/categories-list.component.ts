import { Component } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {
  categories : any;
  firebaseCollectionName: any;

  constructor(public firestore : Firestore){
    this.getCategories()
  }

  getCategories(){
    this.firebaseCollectionName = collection(this.firestore, "categories")
    
    collectionData(this.firebaseCollectionName, { idField: 'id'}).subscribe((categories) => {
      console.log("Fetched Categories", categories);
      this.categories = categories;
    })
  }

 

  delete(id:any) {
      deleteDoc(doc(this.firestore, "categories/" + id)).then(res => {
        alert("Your category is deleted")
        console.log(res)
      }).catch(err =>{
        console.log(err)
      })
    }
}
