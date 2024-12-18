import { Component } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, query, updateDoc, where } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  loader : boolean = false;
  userDetails: any;
  myRecipes: any;
  userId: any = JSON.parse(localStorage.getItem("userDetails") as string)


  constructor(public firestore: Firestore, public route: ActivatedRoute) {
    this.getLoggedinUser()
    this.getMyRecipes()
  }

  getLoggedinUser() {
    let collectionName = collection(this.firestore, "users")
    let firebaseQuery = query(collectionName, where("userId", "==", this.userId))
    this.loader = true
    collectionData(firebaseQuery, { idField: "id" }).subscribe((user) => {
      this.loader = false;
      console.log(user)
      this.userDetails = user[0]
    })
  }

updateLoggedinUser(){
  let data = { name: this.userDetails.name, 
               phoneNumber: this.userDetails.phoneNumber};
  updateDoc(doc(this.firestore, "users" + "/" + this.userDetails.id), data).then(res => {
    Swal.fire("User profile updated successfully!");
  }).catch((error) => {
    console.error("Error updating user profile:", error);
  });
  }

  getMyRecipes(){
    const firebaseCollectionName = collection(this.firestore, "recipe")
    this.loader = true
    const firebaseQurey = query(firebaseCollectionName,where("userId","==", JSON.parse(localStorage.getItem("userDetails")as string)))
    collectionData(firebaseQurey, { idField: 'id'}).subscribe((myRecipes: any) => {
      this.loader = false
      console.log("Fetched Recipe", myRecipes);
      this.myRecipes = myRecipes;
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
        deleteDoc(doc(this.firestore, "recipe/" + id)).then(res => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
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


