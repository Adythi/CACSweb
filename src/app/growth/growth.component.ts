import { Component } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-growth',
  templateUrl: './growth.component.html',
  styleUrls: ['./growth.component.css']
})
export class GrowthComponent {
  activeSlides: SlidesOutputData;

      slidesStore: any[];
      constructor() {}

      getPassedData(data: SlidesOutputData) {
        this.activeSlides = data;
        console.log(this.activeSlides);
      }
  pastperformance = [
    {
      "id":"1",
      "images": "../../assets/img/opm.jpeg",
      "heading": "Office of Personnel Management",
      "years": "2023-2028",
      "value": "$20M ($5M / Yr)",
      "details": "CaCS is providing multi-year (5+) support to federal government employees by facilitating the transition and successful launch of the BeneFed FEDVIP portal, involving legacy- to - modern technology conversion and integration(Java, Angular, AS400)."
    },
    {
      "id":"2",
      "images": "../../assets/img/NY-wellfaremgmt.png",
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
      "images": "../../assets/img/NY-wellfaremgmt.png",
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
      "images": "../../assets/img/NY-wellfaremgmt.png",
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
  customOptions: OwlOptions = {
    autoplay: true,
    smartSpeed: 1500,
    autoHeight:true,
    autoWidth: true,
    dots: true,
    loop: true,
    center: true,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  }
}
