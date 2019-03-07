import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  private posts = []
  
  constructor(private postserv: PostsService) {}

  getposts() {
    this.postserv.getpostservice().subscribe(response => {
      console.log(response);
      //this.posts = response;
    })
  }

  ngOnInit() {
    
  }

}
