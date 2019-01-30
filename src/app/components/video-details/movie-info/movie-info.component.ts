import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input() movie: Object;
  
  constructor() { }

  ngOnInit() {
  }

}
