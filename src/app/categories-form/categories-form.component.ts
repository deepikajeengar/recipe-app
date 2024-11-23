import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent {
categoryName: any;
image: any;

addCategory(){
  console.log(this.categoryName)
  console.log(this.image)
}
}
