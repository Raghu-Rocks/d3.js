import { Component, Input } from '@angular/core';
import * as D3 from "d3/index";

import { TweetService } from "./../shared/tweet.service";
import { Tweet } from "./../shared/tweet";


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
	@Input() tweets: Tweet[];

  constructor(){ }

	ngOnInit(){ }

}

