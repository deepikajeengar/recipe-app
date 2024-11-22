import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './home/recipe-list/recipe-list.component';
import { RecipeFeedComponent } from './home/recipe-feed/recipe-feed.component';
import { CategoryFilterComponent } from './home/category-filter/category-filter.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { NotificationComponent } from './notification/notification.component';
import { RecipeDetailsComponent } from './recipe-details-page/recipe-details/recipe-details.component';
import { UserDasboardComponent } from './user-dasboard/user-dasboard.component';
import { UserProfileComponent } from './user-dasboard/user-profile/user-profile.component';
import { UserRecipePostComponent } from './user-dasboard/user-recipe-post/user-recipe-post.component';
import { LikeComponent } from './user-dasboard/like/like.component';
import { CommentComponent } from './user-dasboard/comment/comment.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { AddRecipeFormComponent } from './home/add-recipe-form/add-recipe-form.component';
import { LogInComponent } from './user-dasboard/log-in/log-in.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';

const routes: Routes = [
  {path: '', component: SplashScreenComponent},  
  {path:'home', component:HomeComponent, children:[
    {path:'recipe-list', component: RecipeListComponent},
    {path:'', component:RecipeFeedComponent},
    {path:'category-filter', component: CategoryFilterComponent},
    {path:'search-bar', component: SearchBarComponent},
    {path:'add-recipe-form', component: AddRecipeFormComponent}
  ]},

  {path: 'notification', component: NotificationComponent},
  {path: 'recipe-details-page/recipe-details', component: RecipeDetailsComponent},

  {path: 'user-dashboard', component: UserDasboardComponent, children: [
    {path: '', component: UserProfileComponent},
    {path: 'user-recipe-post', component: UserRecipePostComponent},
    {path:'log-in', component: LogInComponent}
  ]},

  {path: 'categories-form', component: CategoriesFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
