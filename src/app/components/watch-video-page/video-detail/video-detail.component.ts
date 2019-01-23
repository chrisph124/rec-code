import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @Input() videoDetail: Object
  constructor() { }

  ngOnInit() {
    console.log(this.videoDetail);
    
  }

}
