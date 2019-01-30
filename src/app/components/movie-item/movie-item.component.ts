import { Component, OnInit, Input } from '@angular/core';
import { RelatedMovie } from 'src/app/types/related-movie-item';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieItem: RelatedMovie;
  constructor() { }

  ngOnInit() {
  }

  getUrl() {
    return `url('${this.movieItem.poster}')`;
  }
}
