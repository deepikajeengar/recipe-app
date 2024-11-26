import { Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
category: any;
firebaseCollectionName: any;

constructor(public firestore: Firestore){
  this.getCategory()
}

getCategory(){
  this.firebaseCollectionName = collection(this.firestore, "categories")

  collectionData(this.firebaseCollectionName, {idField: 'id'}).subscribe((category: any) => {
    this.category = category;
  })

}
}
