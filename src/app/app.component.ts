import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mugen-blog';
constructor(private activatedRoute: ActivatedRoute)
{
  console.log(this.activatedRoute.url);
}

}
