import { Component, OnInit, ElementRef } from '@angular/core';
import * as D3 from "d3/index";

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html', 
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {

  errorMessage:string;
  host;
  svg;

  constructor(private _element: ElementRef){
    this.host = D3.select(this._element.nativeElement)
  }

ngOnInit(){
	this.buildSvg();
}

buildSvg():void{
	this.host.html("");
	this.svg = this.host.append("svg")
			.attr("width", "600")
			.attr("height", "400")
			.style("border", "1px solid #000");
}

}
