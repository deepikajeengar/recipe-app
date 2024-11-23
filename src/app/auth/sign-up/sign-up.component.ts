import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
name:any;
phoneNumber: any;
email: any;
password: any;

signUp(){
console.log(this.name)
console.log(this.phoneNumber)
console.log(this.email)
console.log(this.password)
}
}
