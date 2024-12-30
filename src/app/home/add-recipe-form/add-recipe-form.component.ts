import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { addDoc, collectionData, doc, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})
export class AddRecipeFormComponent {
  loader: boolean = false;
  recipeName: any;
  instruction: any;
  image: any;
  category: any;
  firebaseCollectionName: any;
  categories: any;
  recipeId: any;

  imageUrl: any;
  selectedFile: any;

  uploadUrl = 'https://api.cloudinary.com/v1_1/dfu3sgwfo/image/upload';
  uploadPreset = 'shopping app';

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '200px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
  }

  constructor(public firestore: Firestore, public route: ActivatedRoute, public router: Router, public http: HttpClient) {
    this.recipeId = route.snapshot.paramMap.get("recipeId")
    this.getCategories()
    if (this.recipeId) {
      this.getRecipe()
    }

  }

  addRecipe() {
    this.loader = true
    let data = {
      name: this.recipeName,
      instruction: this.instruction,
      image: this.image,
      category: this.category,
      userId: JSON.parse(localStorage.getItem("userDetails") as string)
    }
    console.log(data)
    this.firebaseCollectionName = collection(this.firestore, "recipe")

    if(this.selectedFile){
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('upload_preset', this.uploadPreset);
    
     this.http.post(this.uploadUrl, formData).subscribe((res : any) => {
        data.image = res.url
        console.log(data)
    addDoc(this.firebaseCollectionName, data).then(res => {
      this.loader = false
      Swal.fire("Recipe added successfully");
      this.router.navigateByUrl("/home")
      this.recipeName = null,
        this.instruction = null,
        this.image = null,
        this.category = null
    }).catch((error) => {
      console.error("Error adding recipe", error)
    });
  })
}else{
  addDoc(this.firebaseCollectionName, data).then(res => {
    this.loader = false
    Swal.fire("Recipe added successfully");
    this.router.navigateByUrl("/home")
    this.recipeName = null,
      this.instruction = null,
      this.image = null,
      this.category = null
  }).catch((error) => {
    console.error("Error adding recipe", error)
  });
}}


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
    const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          this.imageUrl = e.target?.result as string; // Preview ke liye set karein
        };
        reader.readAsDataURL(this.selectedFile);
  }


  getCategories() {
    this.loader = true
    this.firebaseCollectionName = collection(this.firestore, "categories")

    collectionData(this.firebaseCollectionName, { idField: 'id' }).subscribe((categories) => {
      this.loader = false
      console.log("Fetched Categories", categories);
      this.categories = categories;
    })
  }

  updateRecipe() {
    this.loader = true
    let data = {
      name: this.recipeName,
      instruction: this.instruction,
      // image: this.image,
      category: this.category,
      userId: JSON.parse(localStorage.getItem("userDetails") as string)
    }
    updateDoc(doc(this.firestore, "recipe/" + this.recipeId), data).then(res => {
      this.loader = false
      Swal.fire("Your recipe is updated")
      this.router.navigateByUrl("/user-dashboard")
      console.log(res)
    })
  }

  getRecipe() {
    this.loader = true
    const docPath = doc(this.firestore, "recipe/" + this.recipeId)
    getDoc(docPath).then((recipe: any) => {
      this.loader = false
      console.log(recipe)
      console.log(recipe.data())
      const recipeDetails = recipe.data();
      console.log(recipeDetails)
      this.recipeName = recipeDetails.name
      this.category = recipeDetails.category
      this.instruction = recipeDetails.instruction
    })
  }

  
}
