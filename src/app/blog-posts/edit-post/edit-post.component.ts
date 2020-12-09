import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts-service/posts.service';
import { Stories } from '../stories.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  story : Stories;

  stories: Stories[];

  title:string;

  constructor(private storiesService: PostsService, private activatedRoute: ActivatedRoute, private router: Router) {
   this.title=this.activatedRoute.snapshot.paramMap.get('title');
   }
    
  ngOnInit(): void {
    this.story= new Stories();
    this.storiesService.getStory(this.title).subscribe(
      (story: Stories)=>{
        this.story=story;
        console.log(story);
      },
      (error)=>{
        console.log(error);
      });
  }
  onUpdateStory()
  {
    this.storiesService.update(this.story);
    this.router.navigate(['../view']);
  }

}
