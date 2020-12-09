import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VipArenaComponent } from './vip-arena/vip-arena.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersService } from './services/users-service/users.service';
import { PostsService } from './services/posts-service/posts.service';
import { ViewAllPostsComponent } from './blog-posts/view-all-posts/view-all-posts.component';
import { EditPostComponent } from './blog-posts/edit-post/edit-post.component';
import { AddPostComponent } from './blog-posts/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogPostsComponent,
    
    LoginPageComponent,
    RegisterPageComponent,
    AboutUsComponent,
    VipArenaComponent,
    FooterComponent,
    HomePageComponent,
    ViewAllPostsComponent,
    EditPostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }