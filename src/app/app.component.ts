import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title = 'angularStart';
  username = "Placeholder";
  postList = [];
  
  constructor(private postService:PostService){
    //here
  }

  ngOnInit(){
    this.postList = this.postService.listPosts();
  }
}
