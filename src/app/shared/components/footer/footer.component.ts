import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerArray = [
    {imgLink: "www.facebook.com", icon:'<i class="fab fa-facebook-f"></i>'},
    {imgLink: "www.twitter.com", icon:'<i class="fab fa-twitter"></i>'},
    {imgLink: "www.instagram.com", icon:'<i class="fab fa-instagram"></i>'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
