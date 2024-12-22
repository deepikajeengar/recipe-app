import { Component } from '@angular/core';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: any; // User email
  loader: boolean = false; // Loader state

  constructor(private auth: Auth) {}

  forgetPassword() {
    // Validate email
    if (!this.email) {
      alert('Please enter your registered email address.');
      return;
    }

    // Show loader
    this.loader = true;

    // Send password reset email
    sendPasswordResetEmail(this.auth, this.email)
      .then(() => {
        this.loader = false;
        alert('Password reset link has been sent to your email.');
        this.email = ''; // Clear input field
      })
      .catch((error) => {
        this.loader = false;
        console.error(error);
        alert('Failed to send password reset email. Please try again.');
      });
  }
}
