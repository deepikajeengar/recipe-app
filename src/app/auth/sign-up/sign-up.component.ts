import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  loader: boolean = false
  name: any;
  phoneNumber: any;
  email: any;
  password: any;
  firebaseCollectionName: any;


  constructor(public firestore: Firestore, public auth: Auth, public router: Router) { }


  signUp() {
    this.loader = true
    createUserWithEmailAndPassword(this.auth, this.email, this.password).then(res => {
      let data = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        email: this.email,
        userId: res.user.uid
      }

      this.firebaseCollectionName = collection(this.firestore, "users")

      addDoc(this.firebaseCollectionName, data).then(res => {
        this.loader = false
        alert("Sign up successfully. Please Log in")
        this.router.navigateByUrl("/auth/log-in")
      }).catch(err => {
        console.log(err)
      })
    }).catch(err=>{
      alert(err)
    })
  }
}
