import { Component, OnInit } from '@angular/core';
import { movieDetails } from '../../mock-up/media-mockup';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  movie: Object;
  slideConfig = {"slidesToShow": 2, "slidesToScroll": 1, "infinite": true};
  constructor() { }

  ngOnInit() {
    this.movie = movieDetails;
  }

}
