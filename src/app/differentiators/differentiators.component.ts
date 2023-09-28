import { publishFacade } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-differentiators',
  templateUrl: './differentiators.component.html',
  styleUrls: ['./differentiators.component.css']
})
export class DifferentiatorsComponent implements OnInit{
  differentiatorContentArray:differentiators[]=[];
  differentiatorContentObject:differentiators=new differentiators();

  constructor()
  {

  }

  ngOnInit()
  {
    this.fetchContentForDifferentiator();
  }

  fetchContentForDifferentiator()
  {
    var testContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    this.differentiatorContentObject.logo="assets/img/logo-cacs.png";
    this.differentiatorContentObject.title="TITLE";
    this.differentiatorContentObject.content=testContent;
    this.differentiatorContentObject.background="Pink";
    this.differentiatorContentArray.push(this.differentiatorContentObject);

    this.differentiatorContentObject.logo="assets/img/logo-cacs.png";
    this.differentiatorContentObject.title="TITLE";
    this.differentiatorContentObject.content=testContent;
    this.differentiatorContentObject.background="Black";
    this.differentiatorContentArray.push(this.differentiatorContentObject);

    this.differentiatorContentObject.logo="assets/img/logo-cacs.png";
    this.differentiatorContentObject.title="TITLE";
    this.differentiatorContentObject.content=testContent;
    this.differentiatorContentObject.background="Black";
    this.differentiatorContentArray.push(this.differentiatorContentObject);
  }
}

export class differentiators
{
  logo:string
  title:string
  content:string
  background:string
}