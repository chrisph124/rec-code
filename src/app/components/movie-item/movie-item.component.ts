import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieItem: Movie;
  constructor() { }

  ngOnInit() {
  }

  getUrl() {
    return `url('${this.movieItem.poster}')`;
  }
}
