import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

import { SurveyHttpService } from "../../services/survey.http.service";
import { SurveyService } from "../../services/survey.service";

@Component({
	templateUrl: 'list.component.html'
})
export class ListComponent {
	private surveyList:any={}
	
	constructor(private surveyHttpService:SurveyHttpService,private surveyService:SurveyService, private router:Router){ }
	
	ngOnInit(){
		this.surveyHttpService.getSurveyList()
			.subscribe(
				data => {
					console.log(data);
					this.surveyList = data;
				},
				error => {
					console.log(error)
				}
			);
	}

	surveyItem(surveyId:string){
//		this.surveyService.survey = survey;
//		console.log(this.surveyService);
//		this.router.navigate(['/survey/item']);
		
		this.surveyHttpService.getSurveyItem(surveyId)
			.subscribe(
				data => {
					console.log(data);
					this.surveyService.survey = data;
					this.router.navigate(['/survey/item']);
				},
				error => {
					console.log(error)
				}
			);

	}

/*private chartData: Array<any>;
	generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

*/
}