import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  loading: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
