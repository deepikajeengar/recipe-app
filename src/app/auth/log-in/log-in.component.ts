import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  loader : boolean = false
  email: any;
  password: any;
  
  constructor(public firestore: Firestore, private router: Router, public auth: Auth){}

  async logIn() {
    this.loader = true
    if (!this.email || !this.password) {
      alert('Please fill in both email and password.');
      return;
    }else{
      signInWithEmailAndPassword(this.auth, this.email, this.password).then(res => {
        this.loader = false
        console.log(res)
        if(res.user.emailVerified) {
          localStorage.setItem("userDetails", JSON.stringify(res.user.uid))
          this.router.navigateByUrl("/home");
        } else {
          sendEmailVerification(res.user).then(res=>{
            alert("Your email is not verify. We sent verification link on your mail id. Please verify first.");
          })
        }
      }).catch(err => {
        console.log(err)
        alert("You have to sign up first")
        this.router.navigateByUrl("/auth/sign-up")
      })
    }
  }
}






