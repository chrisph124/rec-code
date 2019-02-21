import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Movie } from 'src/app/models/movie';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit, OnDestroy {
  movie: Movie;
  slideConfig = {slidesToShow: 2, slidesToScroll: 1, infinite: true};
  movieId: string;
  relatedMovies: Movie[] = [];
  private sub: Subscription;
  constructor(private route: ActivatedRoute, private dataService: DataService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.dataService.getMovieById(this.movieId).subscribe(data => {
        this.movie = data;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
