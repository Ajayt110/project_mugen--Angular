import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { PostsService } from 'src/app/services/posts-service/posts.service';
import { Stories } from '../stories.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

 
  stories: Stories[];
  @Input() story:Stories;
  constructor(private storiesService: PostsService, private router: Router, private httpClient:HttpClient) {
    this.story=new Stories();
   }

  ngOnInit(): void {
    this.storiesService.getStories().subscribe(
      (stories: Stories[])=>{
        this.stories=stories;
        console.log(stories);
      },
      (error)=>{
        console.log(error);
      });
  }
  onAddStory():void
  {
    if(this.story.content!=null && this.story.title!=null)
   {
    console.log(this.story);
    this.storiesService.addStory(this.story).subscribe(
      (story:Stories) => {
        console.log(story);
        this.router.navigate(["../view"]);
      },
      (error)=>{
        console.log(error);
      }
    );
     
   } 
   else{
     document.getElementById("error-message").classList.replace("display-error","display-5");
   }
  }
}
