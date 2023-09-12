import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  moreIT = false;
  moreDA = false;
  moreBIS = false;
  itList = [
    "Technology Strategy",
    "IT Support Services",
    "IT Hardware & Software",
    "IT Infrastructure & Training",
    "Network Infrastructure",
    "Cloud Services",
    "Managed Services",
    "Disaster Recovery",
    "IT Security & Support Services",
    "Security Management & Operations",
    "Security Technology",
    "FISMA Compliance",
    "Cyber Security & Cyber Operations",
    "Incident Management",
    "Security Engineering",
    "Data Protection & Recovery"];
    daLists =[
      "Data Collection",
      "Data Quality",
      "Metadata"
    ];
    bisList = [
      "Risk Management",
      "Knowledge Management",
      "Software as a Service / SaaS",
      "Systems Engineering",
      "Business Process Improvement",
      "Information Management Services"
    ]
}
