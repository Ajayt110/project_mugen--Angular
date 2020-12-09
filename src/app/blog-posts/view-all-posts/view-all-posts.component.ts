import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts-service/posts.service';
import { Stories } from '../stories.model';

@Component({
  selector: 'app-view-all-posts',
  templateUrl: './view-all-posts.component.html',
  styleUrls: ['./view-all-posts.component.css']
})
export class ViewAllPostsComponent implements OnInit {

  stories: Stories[];
  story:Stories;
  selectedStory: Stories=new Stories();
  constructor(private postsService: PostsService, private router: Router) { 
    this.story= new Stories();
  }

  ngOnInit(): void {
    this.story= new Stories();
    this.postsService.getStories().subscribe(
      (stories: Stories[])=>{
        this.stories=stories;
        console.log(stories);
      },
      (error)=>{
        console.log(error);
      });
  }
  edit(title:string):void{
    this.router.navigate(['../edit',title]);
    // console.log(story);
    // this.selectedStory=story;
  }
  onAddStory()
  {
    this.router.navigate(["../add"]);
    // document.getElementById("change").innerHTML="<app-add-post></app-add-post>";
  }
}
