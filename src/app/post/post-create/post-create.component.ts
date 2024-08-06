import { Component } from '@angular/core';

@Component({
  selector: 'post-create-component',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  enteredPost = '';
  initialValue = '';
  onPost() {
    this.initialValue = this.enteredPost;
    console.log('im here');
  }
}
