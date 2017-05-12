import { Component, OnInit, ElementRef } from '@angular/core';
import * as D3 from "d3/index";
import './shared/rxjs-operators';

import { TweetService } from "./shared/tweet.service";
import { Tweet } from './shared/tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D3 with Angular2';

  errorMessage: string;
  term: string;
  tweets: Tweet[] = [];
  twitterState: any = {};


  constructor (private _tweetService: TweetService) { }

  ngOnInit() {
    this.connectToTweetStream();
  }

	connectToTweetStream(){
		this._tweetService.connectToStream()
			.subscribe(
				tweet => {
          console.log(tweet)
          // this.streamContainer.append('p').html(JSON.stringify(tweet));
          this.tweets.push(tweet as Tweet);
          this.twitterState = {
            tweets: this.tweets
          };
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


