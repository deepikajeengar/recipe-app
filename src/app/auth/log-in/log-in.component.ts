import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
email: any;
password: any;


logIn(){
console.log(this.email)
console.log(this.password)
}

}
