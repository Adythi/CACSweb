import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CACS';
  images = ['assets/img/carousel-1.jpg', 'assets/img/carousel-2.png'];
  observer: Subscription;
  pathParams: any;
  stickNavBar:boolean=false;
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
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
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 45 ||     
    document.documentElement.scrollTop > 45) {
      this.stickNavBar=true;
     //document.getElementById('header')?.classList.add('sticky-top shadow-sm');
    } else {
      this.stickNavBar=false;
      //document.getElementById('header')?.classList.remove('sticky-top shadow-sm');
    }
  }
}
