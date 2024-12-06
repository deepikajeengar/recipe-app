import { Component } from '@angular/core';
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userDetails : any;

  userId : any = JSON.parse(localStorage.getItem("userDetails") as string)
  

constructor(public firestore : Firestore){
  this.getLoggedinUser()
}

  getLoggedinUser(){
  let collectionName = collection(this.firestore, "users")

 let firebaseQuery = query(collectionName, where("userId", "==" , this.userId))

  collectionData(firebaseQuery, {idField:"id"}).subscribe((user) =>{
    console.log(user)
    this.userDetails = user[0]
  })
  }
}
