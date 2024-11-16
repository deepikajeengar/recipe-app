import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: any; 
  onSearch(): void {
    console.log("Search Query:", this.searchQuery);
    this.searchQuery = null;
}
}
