import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts = [
    { title: '1st Post', content: 'This is the content of the 1st post.' },
    { title: '2nd Post', content: 'This is the content of the 2nd post.' },
    { title: '3rd Post', content: 'This is the content of the 3rd post.' },
  ];
}
