import { Component, OnInit } from '@angular/core';
import { mediaJSON } from '../../mock-up/media-mockup';

@Component({
  selector: 'rec-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  mediaJSON = mediaJSON

  constructor() { }

  ngOnInit() {
  }

}
