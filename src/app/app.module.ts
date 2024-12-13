import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeFeedComponent } from './home/recipe-feed/recipe-feed.component';
import { CategoryFilterComponent } from './home/category-filter/category-filter.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { UserDasboardComponent } from './user-dasboard/user-dasboard.component';
import { UserRecipePostComponent } from './user-dasboard/user-recipe-post/user-recipe-post.component';
import { UserProfileComponent } from './user-dasboard/user-profile/user-profile.component';
import { LikeComponent } from './user-dasboard/like/like.component';
import { CommentComponent } from './user-dasboard/comment/comment.component';
import { RecipeDetailsComponent } from './recipe-details-page/recipe-details/recipe-details.component';
import { NotificationComponent } from './notification/notification.component';
import { RecipeListComponent } from './home/recipe-list/recipe-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TabComponent } from './shared/tab/tab.component';
import { AddRecipeFormComponent } from './home/add-recipe-form/add-recipe-form.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { CategoriesListComponent } from './categories-form/categories-list/categories-list.component';
import { AddCategoryComponent } from './categories-form/add-category/add-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeFeedComponent,
    CategoryFilterComponent,
    SearchBarComponent,
    UserDasboardComponent,
    UserRecipePostComponent,
    UserProfileComponent,
    LikeComponent,
    CommentComponent,
    RecipeDetailsComponent,
    NotificationComponent,
    RecipeListComponent,
    SplashScreenComponent,
    NavbarComponent,
    TabComponent,
    AddRecipeFormComponent,
    CategoriesFormComponent,
    AuthComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    LogInComponent,
    CategoriesListComponent,
    AddCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyD8xflMR9X30-NRcOanV0538c3ZcMBn4BU",
      authDomain: "recipe-app-03.firebaseapp.com",
      projectId: "recipe-app-03",
      storageBucket: "recipe-app-03.firebasestorage.app",
      messagingSenderId: "761035554208",
      appId: "1:761035554208:web:b680c3625d96b05c7178c5",
      measurementId: "G-TWFPTN65NY",
     })),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
