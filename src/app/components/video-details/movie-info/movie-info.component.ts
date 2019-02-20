import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input() movie: Movie;
  rating: number;
  constructor() { }

  ngOnInit() {
    if (!this.movie) {
      this.movie = new Movie();
    }
    this.rating = Math.round(Math.random() * 5);
  }

}
