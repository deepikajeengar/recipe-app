import { Component } from '@angular/core';
import { Auth, sendEmailVerification, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
formdata: any = {email: '', password: ''}


constructor(public router: Router, private auth: Auth) {
}

logIn(){
  if(!this.formdata.email || !this.formdata.password) {
    alert("Please add your credentials")
  }else{
    signInWithEmailAndPassword(this.auth, this.formdata.email, this.formdata.password).then(res => {
      console.log(res)
      if(res.user.emailVerified) {
        localStorage.setItem("userDetails", JSON.stringify(res.user))
        this.router.navigateByUrl("/home");
    } else{
      sendEmailVerification(res.user).then(res => {
        alert("Your email is not verify. We sent verification link on your mail id. Please verify first.");
      })
    }
    }).catch(err => {
      console.log(err)
      alert("You have to signup first to logIn")
      this.router.navigateByUrl("/auth/signup")
    })
  }
}



}
