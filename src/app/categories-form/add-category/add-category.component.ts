import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { collection, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  loader: boolean = false;
  categoryName: any;
  image: any;
  shortDescription: any;
  firebaseCollectionName: any;
  categoryId: any;
  categories: any;
  updatedData: any;

  imageUrl: any;
  selectedFile: any;

  uploadUrl = 'https://api.cloudinary.com/v1_1/dfu3sgwfo/image/upload';
  uploadPreset = 'shopping app'

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
    this.categoryId = route.snapshot.paramMap.get("categoryId")
    if (this.categoryId) {
      this.getCategory()
    }
  }

  addCategory() {
    this.loader = true;
    let data = {
      name: this.categoryName,
      image: this.image,
      description: this.shortDescription
    }

    this.firebaseCollectionName = collection(this.firestore, "categories")

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('upload_preset', this.uploadPreset);

      this.http.post(this.uploadUrl, formData).subscribe((res: any) => {
        data.image = res.url
        console.log(data)
        addDoc(this.firebaseCollectionName, data).then(res => {
          this.loader = false;
          Swal.fire("Category added successfully!");
          this.router.navigateByUrl("/categories-form/categories-list")
          this.categoryName = null
          this.image = null
          this.shortDescription = null;
        }).catch((error) => {
          console.error("Error adding category:", error);
        });
      })
    } else {
      addDoc(this.firebaseCollectionName, data).then(res => {
        this.loader = false;
        Swal.fire("Category added successfully!");
        this.router.navigateByUrl("/categories-form/categories-list")
        this.categoryName = null
        this.image = null
        this.shortDescription = null;
      }).catch((error) => {
        console.error("Error adding category:", error);
      });
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
    const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          this.imageUrl = e.target?.result as string; // Preview ke liye set karein
        };
        reader.readAsDataURL(this.selectedFile);
  }

  getCategory() {
    this.loader = true
    const docPath = doc(this.firestore, "categories/" + this.categoryId)
    getDoc(docPath).then((category: any) => {
      this.loader = false
      console.log(category.data())
      this.categoryName = category.data().name
      this.shortDescription = category.data().description
    })
  }

  edit() {
    this.loader = true
    let data = {
      name: this.categoryName,
      // image: this.image,
      description: this.shortDescription
    }
    updateDoc(doc(this.firestore, "categories/" + this.categoryId), data).then(res => {
      this.loader = false
      Swal.fire("Your category is updated");
      console.log(res);
      this.router.navigateByUrl("/categories-form/categories-list")
    }).catch(err => {
      console.log(err);
      Swal.fire("Error getting your category!")
    })
  }
}
