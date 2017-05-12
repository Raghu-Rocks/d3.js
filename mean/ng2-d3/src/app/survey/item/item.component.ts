import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

import { SurveyHttpService } from "../../services/survey.http.service";
import { SurveyService } from "../../services/survey.service";
import { SocketService } from "../../services/socket.service";

import * as d3 from "d3";

@Component({
	templateUrl: 'item.component.html',
})
export class ItemComponent {

private chartData: Array<any>;
	private poll:any = null;
  	private connection;
	constructor(private surveyHttpService: SurveyHttpService, private surveyService:SurveyService, private socketService:SocketService){
		console.log(this.surveyService);
		console.log(d3)
		this.poll = this.surveyService.survey;
	}
	ngOnInit() {
		this.connection = this.socketService.getNewVote().subscribe(newVote => {
		  console.log(newVote);
			this.poll = newVote;
			this.displayData();
		})
	  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
	onVote() {
		if(!!this.poll.userVote) {
			let voteObj = { poll_id: this.poll._id, choice: this.poll.userVote };
			console.log(voteObj)
			this.socketService.sendVote(voteObj);
		} else {
			alert('You must select an option to vote for');
		}

	}

	
	displayData(){
    this.chartData = [];
		console.log(this.poll.choices)
		// for (let i = 0; i < this.poll.choices; i++) {
		this.poll.choices.map(function(choice) {
			console.log(choice.text, choice.votes.length)
      this.chartData.push([
        choice.text,
        choice.votes.length
      ]);
		}.bind(this))
		console.log(this.chartData);
	}


}