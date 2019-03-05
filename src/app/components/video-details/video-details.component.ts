import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Movie } from 'src/app/models/movie';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GroupMovie } from 'src/app/models/groupMovie';
import { map } from 'rxjs/operators';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit, OnDestroy {
  movie: Movie;
  slideConfig = {slidesToShow: 2, slidesToScroll: 1, infinite: true};
  movieId: string;
  relatedMovie: GroupMovie = new GroupMovie();
  private sub: Subscription;
  private subMovie: Subscription;
  private subRelatedMovie: Subscription;
  constructor(private route: ActivatedRoute, private dataService: DataService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.subMovie = this.dataService.getMovieById(this.movieId).subscribe(data => {
        this.movie = data;
      });
      this.subRelatedMovie = this.dataService.getListMovies('similarity', this.authService.userId, this.movieId)
      .subscribe(data => {
        this.relatedMovie = data[0];
      });
    });
  }

  ngOnDestroy() {
    this.subMovie.unsubscribe();
    this.subRelatedMovie.unsubscribe();
    this.sub.unsubscribe();
  }

}
