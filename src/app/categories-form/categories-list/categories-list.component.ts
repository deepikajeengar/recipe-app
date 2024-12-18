import { Component } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {
  loader : boolean = false;
  categories : any;
  firebaseCollectionName: any;

  constructor(public firestore : Firestore){
    this.getCategories()
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

  delete(id:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      console.log(result)
      if (result.isConfirmed) {
        deleteDoc(doc(this.firestore, "categories/" + id)).then(res => {
          Swal.fire({
            title: "Deleted!",
            text: "Your category is deleted.",
            icon: "success"
          });
          console.log(res)
        }).catch(err =>{
          console.log(err)
        })
      }
    });
   }
 
}
