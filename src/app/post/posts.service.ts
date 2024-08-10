import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const addedPost = { title: title, content: content };
    this.posts.push(addedPost);
    this.postsUpdated.next([...this.posts]);
  }
}
