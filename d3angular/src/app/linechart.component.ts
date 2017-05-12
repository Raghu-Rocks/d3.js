import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';
import {Http} from '@angular/http'

@Component({
    moduleId: module.id,
    selector: 'ad-linechart',
    template: `
        <h1>Line Chart</h1>
        <div #chart></div> 
    `
})
export class LineChartComponent implements OnInit {

    constructor(http:Http) { 

        // http.get().toPromise()
        // .then()
        // http.post()
    }


    @Input('width') width: number = 500;
    @Input('height') height: number = 500;

    ngOnInit() { 
    }

    ngAfterViewInit(){
        this.render();
    }

    xStart() {
                return 25
            }
 
    yStart() {
                return this.height - 25
            }

            quadrantWidth() {
                return this.width -50;
            }
         

    renderAxis(svg){
                let scale = d3.scaleLinear()
                    .domain([1, 1000])
                    .range([1, this.quadrantWidth()]);
                let axis = d3.axisBottom(scale);

                svg.append('g')
                    .classed('axis', true)
                     .attr('transform', function(){
                        'translate(' + this.xStart() + ',' + this.yStart() + ')'
                     }.bind(this)) 
                    .call(axis);
   }

    render(){
        let svg = d3.select(this.chart.nativeElement)
            .append('svg')
            .attr('height', this.height)
            .attr('width', this.width)
            .style('border', '1px solid black');

        this.renderAxis(svg)    
    }

    
    @ViewChild('chart') chart: ElementRef;

}