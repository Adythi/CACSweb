import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CACS';
  images = ['../assets/img/carousel-1.jpg', '../assets/img/carousel-2.png'];
  observer: Subscription;
  pathParams: any;
  constructor(private router: Router) {
    this.observer = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        const urlTree = this.router.parseUrl(url);
        let path = url.split("?")[0];
        this.pathParams = urlTree.queryParams;
        if (event.url.includes('#about')) {
          document.getElementById("about")?.scrollIntoView();
        } else if (event.url.includes('#services')) {
          document.getElementById("services")?.scrollIntoView();
        } else if (event.url.includes('#contact')) {
          document.getElementById("contact")?.scrollIntoView();
        }
      }
    })
  }
  about() {
    let element = document.getElementById("about");
    element?.focus();
  }
  services() {
    let element = document.getElementById("services");
    element?.focus();
  }
  contact() {
    let element = document.getElementById("contact");
    element?.focus();
  }
}
