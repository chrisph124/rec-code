import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-rec-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit, OnDestroy {
  listCarousel: any[];
  constructor() { }

  ngOnInit() {
    this.listCarousel = environment.listCarousel;
  }

  ngOnDestroy() {
  }

}
