import { Component } from '@angular/core';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})
export class AddRecipeFormComponent {
recipeName: any;
instruction: any;
image: any;
category: any;


addRecipe(){
  console.log(this.recipeName)
  console.log(this.instruction)
  console.log(this.image)
  console.log(this.category)
}
}
