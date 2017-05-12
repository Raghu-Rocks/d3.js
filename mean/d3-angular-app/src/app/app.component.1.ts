import { Component, OnInit, ElementRef } from '@angular/core';
import * as D3 from "d3/index";

import { TweetService } from "./shared/tweet.service";
import { Tweet } from './shared/tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D3 with Angular2';

  errorMessage:string;
  host;
  streamContainer;
  term:string;
  tweets: Tweet[] = [];

  constructor(private _element: ElementRef, private _tweetService: TweetService){
    this.host = D3.select(this._element.nativeElement)
  }

ngOnInit(){
	this.buildSvg();
		this.connectToTweetStream();
}

buildSvg():void{
  this.streamContainer = this.host.append('div')
}

	connectToTweetStream(){
		this._tweetService.connectToStream()
			.subscribe(
				tweet => {
          console.log(tweet)
          // this.streamContainer.append('p').html(JSON.stringify(tweet));
          this.tweets.push(tweet as Tweet);
				},
				error => this.errorMessage = <any>error
			);
	}
	
	setSearchTerm(searchTerm){
		this._tweetService.setSearchTerm(searchTerm)
			.subscribe(
				() => console.log("Search term set to "+searchTerm),
				error => this.errorMessage = <any>error
			)
	}

}


