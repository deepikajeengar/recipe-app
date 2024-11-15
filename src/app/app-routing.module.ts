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

const routes: Routes = [
  {path: '', component: SplashScreenComponent},  
  {path:'home', component:HomeComponent, children:[
    {path:'recipe-list', component: RecipeListComponent},
    {path:'recipe-feed', component:RecipeFeedComponent},
    {path:'category-filter', component: CategoryFilterComponent},
    {path:'search-bar', component: SearchBarComponent}
  ]},

  {path: 'notification', component: NotificationComponent},
  {path: 'recipe-details', component: RecipeDetailsComponent},

  {path: 'user-dashboard', component: UserDasboardComponent, children: [
    {path: 'recipe-feed', component: RecipeFeedComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'user-recipe-post', component: UserRecipePostComponent},
    {path: 'like', component: LikeComponent},
    {path: 'comment', component: CommentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
