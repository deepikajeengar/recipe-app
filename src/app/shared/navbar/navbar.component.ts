import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: any; 
  userId: any = localStorage.getItem("userDetails")

constructor(public router : Router, public auth : Auth){}

  onSearch(): void {
    console.log("Search Query:", this.searchQuery);
    this.searchQuery = null;
}

logOut(){
  localStorage.clear()
  this.router.navigateByUrl("/auth/log-in")
  this.auth.signOut()
}
}
