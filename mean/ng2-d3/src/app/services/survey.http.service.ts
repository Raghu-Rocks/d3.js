import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class SurveyHttpService {

	private url:string = "http://localhost:4000";

	constructor(private http: Http) { }


	item(polls: any) {
		console.log(polls);
		return this.http.post(this.url+'/poll', polls).map((res: Response) => {
			console.log(res.json());
			return res.json();
		});

	}

	newSurvey(survey: any) {
		console.log(survey);
		return this.http.post(this.url+'/polls', survey).map((res: Response) => {
			//		console.log(res.json());
			return res.json();
		});
	}

	getSurveyList() {
		return this.http.get(this.url+'/polls/polls').map((res: Response) => {
			//		console.log(res.json());
			return res.json();
		});
	}

	getSurveyItem(surveyId) {
		return this.http.get(this.url+'/polls/' + surveyId).map((res: Response) => {
			//		console.log(res.json());
			return res.json();
		});
	}

	private handleError(error: any) {
		console.log(error);
		return Observable.throw(error.json());
	}

}
