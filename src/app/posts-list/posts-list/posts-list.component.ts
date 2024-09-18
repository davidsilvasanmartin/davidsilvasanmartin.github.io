import { Component } from '@angular/core';
 import postsList from '../../../../public/posts.json'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  constructor() {
    console.log(postsList)
  }

  protected readonly postsList = postsList;
}
