import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'watch-video-page',
  templateUrl: './watch-video-page.component.html',
  styleUrls: ['./watch-video-page.component.css']
})
export class WatchVideoPageComponent implements OnInit {
  video = {
    url: "blob:https://www.youtube.com/17e85a7e-118a-4e4d-896a-a2605d04c935",
    detail: {
      songName: "TìnH Anh Em .",
      singer: {
        name: "khá BảnH"
      },
      channel: {
        url: "https://www.youtube.com/channel/UCG1p8rJOmLOYYSg-ZIVTYCg",
        name: "khabanHVEVO",
        imageUrl: "http://sinhvienit.net/forum/anh_dai_dien/thumbs/avatar768376_2.gif",
        subscribers: 11235123
      },
      uploadedOn: "Feb 29, 2019",
      views: 1000000000,
      likes: 200000000,
      dislikes: 0,
      description: "Ở cái xã hội này không có chuyện đúng sai mà chỉ có kẻ yếu và kẻ mạnh thế thôi"
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
