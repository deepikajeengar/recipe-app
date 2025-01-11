import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './home/recipe-list/recipe-list.component';
import { RecipeFeedComponent } from './home/recipe-feed/recipe-feed.component';
import { CategoryFilterComponent } from './home/category-filter/category-filter.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { RecipeDetailsComponent } from './recipe-details-page/recipe-details/recipe-details.component';
import { UserDasboardComponent } from './user-dasboard/user-dasboard.component';
import { UserProfileComponent } from './user-dasboard/user-profile/user-profile.component';
import { UserRecipePostComponent } from './user-dasboard/user-recipe-post/user-recipe-post.component';
import { AddRecipeFormComponent } from './home/add-recipe-form/add-recipe-form.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthComponent } from './auth/auth.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { AuthGuard } from './auth/auth.guard';
import { CategoriesListComponent } from './categories-form/categories-list/categories-list.component';
import { AddCategoryComponent } from './categories-form/add-category/add-category.component';

const routes: Routes = [
  {path:'', component:HomeComponent, children:[
    {path:'recipe-list/:categoryId/:categoryName', component: RecipeListComponent},
    {path:'', component:RecipeFeedComponent},
    {path:'category-filter', component: CategoryFilterComponent},
    {path:'search-bar', component: SearchBarComponent},
    {path:'add-recipe-form',canActivate:[AuthGuard], component: AddRecipeFormComponent},
    {path:'edit-recipe-form/:recipeId',canActivate:[AuthGuard], component: AddRecipeFormComponent}
  ]},

  {path: 'recipe-details-page/recipe-details/:recipeId', component: RecipeDetailsComponent},

  {path: 'user-dashboard', component: UserDasboardComponent, children: [
    {path: '', canActivate:[AuthGuard], component: UserProfileComponent},
    {path: 'user-recipe-post', component: UserRecipePostComponent},
  ]},

  {path: 'categories-form', component: CategoriesFormComponent, children: [
    {path: '', component: AddCategoryComponent},
    {path: 'edit-category/:categoryId',canActivate:[AuthGuard], component: AddCategoryComponent},
    {path: 'categories-list', component: CategoriesListComponent}
  ]},
  
  {path: 'auth', component: AuthComponent, children: [
    {path:'log-in', component: LogInComponent},
    {path:'sign-up', component: SignUpComponent},
    {path:'forget-password', component: ForgetPasswordComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
