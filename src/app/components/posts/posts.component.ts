import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }
  filterPost = '';
  posts = [
    {
      "id": 1,
      "title": "habladurias del mundo",
      "img": "spinetta" 
       
    },
    {
      "id": 2,
      "title": "Por",
      "img": "spinetta"
    },
    {
      "id": 3,
      "title": "Bajan",
      "img": "spinetta"
    },
    {
      "id": 4,
      "title": "Cantata de puentes amarillos",
      "img": "spinetta"
    },
    {
      "id": 5,
      "title": "Starosta el idiota",
      "img": "spinetta"
    }
  ];
  ngOnInit() {
  }

}
