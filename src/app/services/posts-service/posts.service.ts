import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stories } from 'src/app/blog-posts/stories.model';

@Injectable()
export class PostsService {
  //story: any;

  //story:Stories;

  constructor(private httpClient:HttpClient) { }
  
  public stories : Stories[];
//=[
  //   new Stories('Bahubali','A traitor in the kingdom named Sakithan turns out to be a spy for the malicious Kalakeya tribe, who are known to b savages and destroyers of kingdoms. In the present, Sanga wishes to meet Baahubali.But Kattappa states regrettably that he has died, and that it was he who killed Baahubali.'),
  //   new Stories('Bahubali-2','The next day, Mahendra is crowned the new king of Mahishmati with Avantika as his queen. He declares Mahishmati will be dedicated to upholding peace and justice under his leadership.During the credits, a little girl listening to the story suggests that Mahendra and Avantikas child will become the new king of Mahishmati. Her narrator suggests that its another story.')
  // ]
  
  getStories()
  {
    return this.httpClient.get<Stories[]>('http://localhost:8085/story');
  }

  addStory(story:Stories):Observable<Stories>
  {
    const reqHeaders={'Content-type':'application/json'};
     return this.httpClient.post<Stories>('http://localhost:8085/story',story,{headers:reqHeaders});
  }

  getStory(title:string)
  {
    const reqHeaders={'Content-type':'application/json'};
    return this.httpClient.get<Stories>('http://localhost:8085/story/title',{headers:reqHeaders});
  }

  update(story: Stories):void
  {
    const reqHeaders={'Content-type':'application/json'};
    
    const strObj = this.stories.find( str => str.title === story.title);
    const index = this.stories.indexOf(strObj);
    this.stories[index] = story;
    this.httpClient.put<Stories>('http://localhost:8085/story',story,{headers:reqHeaders});

  }
 
}
