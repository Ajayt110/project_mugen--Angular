import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddPostComponent } from './blog-posts/add-post/add-post.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { EditPostComponent } from './blog-posts/edit-post/edit-post.component';
import { ViewAllPostsComponent } from './blog-posts/view-all-posts/view-all-posts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { VipArenaComponent } from './vip-arena/vip-arena.component';

const routes: Routes = [
  {path: 'login' , component:LoginPageComponent  },
  {path: 'register', component:RegisterPageComponent },
  {path: 'about-us', component: AboutUsComponent },
  {path: 'home', component: HomePageComponent },
  {path: 'vip', component: VipArenaComponent },
  {path: 'add', component: AddPostComponent },
  {path: 'view', component: ViewAllPostsComponent },
  {path: 'default-post', component: BlogPostsComponent },
  {path: 'edit/:title', component:EditPostComponent},
  {path:'',redirectTo:'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
