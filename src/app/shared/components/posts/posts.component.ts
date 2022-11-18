import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postArray= [
    {
      imgLink: "./assets/images/thumbImg1.jpg",
      category: "Lifestyle",
      heading: "More than just a music festival",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    },
    {
      imgLink: "./assets/images/thumbImg2.jpg",
      category: "Lifestyle",
      heading: "Life tastes better with coffee",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    },
    {
      imgLink: "./assets/images/thumbImg3.jpg",
      category: "photodiary",
      heading: "American dream",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    },
    {
      imgLink: "./assets/images/thumbImg4.jpg",
      category: "photodiary",
      heading: "A day exploring the Alps",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
