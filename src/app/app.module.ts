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
import { formatNumber } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TabComponent } from './shared/tab/tab.component';
import { AddRecipeFormComponent } from './home/add-recipe-form/add-recipe-form.component';
import { LogInComponent } from './user-dasboard/log-in/log-in.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';


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
    LogInComponent,
    CategoriesFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
