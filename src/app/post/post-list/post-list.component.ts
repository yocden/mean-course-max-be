import { Component, OnInit } from '@angular/core';
import { Post } from '../../interface/post.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postsService: PostsService) {}
  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsService.getPostUpdateListener()
    .subscribe((posts:Post[]) => {
      this.posts=posts;
    });
  }
}
