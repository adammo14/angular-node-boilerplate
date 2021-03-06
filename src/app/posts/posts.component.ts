import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: any;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
  }

  getPosts() {
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
