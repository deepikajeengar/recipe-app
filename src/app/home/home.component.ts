import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: any; 
  onSearch(): void {
    console.log("Search Query:", this.searchQuery);
    this.searchQuery = null;
}
}