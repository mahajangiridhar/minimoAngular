import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  newPostArray=[
    {
      imgLink: "./assets/images/thumbImg5.jpg",
      category: "Lifestyle",
      heading: "Top 10 song for running",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    },
    {
      imgLink: "./assets/images/thumbImg6.jpg",
      category: "Lifestyle",
      heading: "Cold winter days",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
