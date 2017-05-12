import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { SurveyHttpService } from "../../services/survey.http.service";

@Component({
	templateUrl: 'new-survey.component.html'
})
export class NewSurveyComponent {

	private survey:any = {
		question:'',
		choices:[
			{text:''},
			{text:''}
		]
	}

	constructor(private surveyHttpService: SurveyHttpService, private router:Router){ }

	onSubmit() {
//		console.log(form.value)
		console.log(this.survey);
		this.surveyHttpService.newSurvey(this.survey)
			.subscribe(
				data => {
					console.log(data)
					this.router.navigate(['/survey/list']);
				},
				error => {
					console.log(error)
				}
			);
	}
	
	addChoice(){
		console.log("Adding choice");
		this.survey.choices.push({text:''});
	}

	removeChoice(){
		console.log("Removing choice");
		if(this.survey.choices.length>2){
			this.survey.choices.pop();
		}
	}

}