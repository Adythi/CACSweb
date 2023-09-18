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
  displayScroller = false;
  title = 'CACS';
  images = ['assets/img/carousel-1.jpg', 'assets/img/carousel-2.png'];
  pastperformance = [
    {
      "id":"1",
      "images": "assets/img/opm.jpeg",
      "heading": "Office of Personnel Management",
      "years": "2023-2028",
      "value": "$20M ($5M / Yr)",
      "details": "CaCS is providing multi-year (5+) support to federal government employees by facilitating the transition and successful launch of the BeneFed FEDVIP portal, involving legacy- to - modern technology conversion and integration(Java, Angular, AS400)."
    },
    {
      "id":"2",
      "images": "assets/img/NY-wellfaremgmt.png",
      "heading": "New York State | Wellfare Mgmt. / Child Support Systems",
      "years": "2021-2023",
      "value": "$1,200,000",
      "details": `Multi-year project supporting the NYS transformation
    and modernization of NYS’ OMH legacy Welfare Management
    System (WMS) application, utilizing the Intellisys automation
    platform to extract embedded code, rules, policies, and
    metadata for creating a new modern WMS system based on
    established use-case documents`
    },
    {
      "id":"3",
      "images": "assets/img/NY-wellfaremgmt.png",
      "heading": "New York State | ITS Integrated Eligibility System (IES)",
      "years": "2021-Current (Likely Extension)",
      "value": "$1,250,000",
      "details": `Supported the NYS Office of ITS by supporting their
    transformation of their IEW Integrated Eligibility System from
    development, testing, and implementation of the testers, and
    Java developers to develop and implement a subsystem/
    solution of the NYS ITS (IES).`
    },
    {
      "id":"4",
      "images": "assets/img/NY-wellfaremgmt.png",
      "heading": "New York State | OGS Benefit Administration",
      "years": "2017-2018",
      "value": "$100,000",
      "details": `Provided and developed the NYS OGS’s Benefit
    Administration application (Peoplesoft). CACS documented
    requirements and assisted with the development of the
    Requirement Traceability Metrics for the PeopleSoft Benefit
    Administration processes.`
    }
  ];
  observer: Subscription;
  pathParams: any;
  stickNavBar:boolean=false;
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
        } else if (event.url.includes('#performance')) {
          document.getElementById("performance")?.scrollIntoView();
        } else if (event.url.includes('#whyUs')) {
          document.getElementById("whyUs")?.scrollIntoView();
        }
      }
    })
  }
  about() {
    let element = document.getElementById("about");
    element?.focus();
  }
  whyUs() {
    let element = document.getElementById("whyUs");
    element?.focus();
  }
  scrollUp() {
    window.scroll(0,0);
  }
  performance() {
    let element = document.getElementById("performance");
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
    } else {
      this.stickNavBar=false;
    }
    if (document.body.scrollTop >100  ||     
      document.documentElement.scrollTop > 100) {
        this.displayScroller = true;
    } else {
      this.displayScroller = false;
    }
  }
}
