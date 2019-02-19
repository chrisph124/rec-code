import { Component, OnInit, OnDestroy } from '@angular/core';
import { mediaJSON } from '../../mock-up/media-mockup';
import { DataService } from 'src/app/services/data.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-rec-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit, OnDestroy {
  mediaJSON: Movie[] = [];
  loading: Boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loading = true;
    this.dataService.getListMovies('trending')
    .subscribe(data => {
      this.mediaJSON = data;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.loading = false;
  }

}
