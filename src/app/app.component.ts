import { Component, OnInit } from '@angular/core';
import { mediaJSON } from './mock-up/media-mockup';

@Component({
  selector: 'rec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mediaJSON = mediaJSON

  constructor() { }

  ngOnInit() {
    console.log('mediaJSON', mediaJSON)
  }

}
