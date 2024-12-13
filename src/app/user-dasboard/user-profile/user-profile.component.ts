import { Component } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, query, updateDoc, where } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
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

    collectionData(firebaseQuery, { idField: "id" }).subscribe((user) => {
      console.log(user)
      this.userDetails = user[0]
    })
  }

updateLoggedinUser(){
  let data = { name: this.userDetails.name, 
               phoneNumber: this.userDetails.phoneNumber};
  updateDoc(doc(this.firestore, "users" + "/" + this.userDetails.id), data).then(res => {
    console.log("User profile updated successfully!");
  }).catch((error) => {
    console.error("Error updating user profile:", error);
  });
  }

  getMyRecipes(){
    const firebaseCollectionName = collection(this.firestore, "recipe")
    const firebaseQurey = query(firebaseCollectionName,where("userId","==", JSON.parse(localStorage.getItem("userDetails")as string)))
    collectionData(firebaseQurey, { idField: 'id'}).subscribe((myRecipes: any) => {
      console.log("Fetched Recipe", myRecipes);
      this.myRecipes = myRecipes;
    })
  }

  delete(id:any) {
    deleteDoc(doc(this.firestore, "recipe/" + id)).then(res => {
      alert("Your recipe has been deleted")
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })
  }


}


