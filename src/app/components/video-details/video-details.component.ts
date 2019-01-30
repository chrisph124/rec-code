import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  movie = {
    "movieId":"3983",
    "score":6.645978987136699,
    "title":"Toy Story",
    "poster":"https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg",
    "tags":[
       "animation",
       "adventure",
       "comedy",
       "family",
       "fantasy"
    ]
 };

  constructor() { }

  ngOnInit() {
  }

}
