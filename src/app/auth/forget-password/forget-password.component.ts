import { Component } from '@angular/core';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: any; 
  loader: boolean = false;

  constructor(private auth: Auth) {}

  forgetPassword() {
    if (!this.email) {
      alert('Please enter your registered email address.');
      return;
    }
    this.loader = true;
    sendPasswordResetEmail(this.auth, this.email)
      .then(() => {
        this.loader = false;
        alert('Password reset link has been sent to your email.');
        this.email = '';
      })
      .catch((error) => {
        this.loader = false;
        console.error(error);
        alert('Failed to send password reset email. Please try again.');
      });
  }
}
