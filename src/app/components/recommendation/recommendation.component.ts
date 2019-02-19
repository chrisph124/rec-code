import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Movie } from 'src/app/models/movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rec-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit, OnDestroy {
  mediaJSON: Movie[] = [];
  loading: Boolean = true;
  private sub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loading = true;
    this.sub = this.dataService.getListMovies('trending')
    .subscribe(data => {
      this.mediaJSON = data;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.loading = true;
    this.mediaJSON = [];
    this.sub.unsubscribe();
  }

}
