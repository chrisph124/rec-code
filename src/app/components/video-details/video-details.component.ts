import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  // video = {
  //   url: "blob:https://www.youtube.com/17e85a7e-118a-4e4d-896a-a2605d04c935",
  //   detail: {
  //     songName: "TìnH Anh Em .",
  //     singer: {
  //       name: "khá BảnH"
  //     },
  //     channel: {
  //       url: "https://www.youtube.com/channel/UCG1p8rJOmLOYYSg-ZIVTYCg",
  //       name: "khabanHVEVO",
  //       imageUrl: "http://sinhvienit.net/forum/anh_dai_dien/thumbs/avatar768376_2.gif",
  //       subscribers: 11235123
  //     },
  //     uploadedOn: "Feb 29, 2019",
  //     views: 1000000000,
  //     likes: 200000000,
  //     dislikes: 0,
  //     description: "Ở cái xã hội này không có chuyện đúng sai mà chỉ có kẻ yếu và kẻ mạnh thế thôi"
  //   }
  // }
  constructor() { }

  ngOnInit() {
  }

}
