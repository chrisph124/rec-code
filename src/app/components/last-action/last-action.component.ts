import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-action',
  templateUrl: './last-action.component.html',
  styleUrls: ['./last-action.component.css']
})
export class LastActionComponent implements OnInit {
  lists = [
    {
      link: "https://www.youtube.com/embed/VUFmhKpZKlE",
      title: "Spider-Man: Far From Home | Teaser Trailer"
    },
    {
      link: "https://www.youtube.com/embed/VUFmhKpZKlE",
      title: "Spider-Man: Far From Home | Teaser Trailer"
    },
    {
      link: "https://www.youtube.com/embed/VUFmhKpZKlE",
      title: "Spider-Man: Far From Home | Teaser Trailer"
    },
    {
      link: "https://www.youtube.com/embed/VUFmhKpZKlE",
      title: "Spider-Man: Far From Home | Teaser Trailer"
    },
    {
      link: "https://www.youtube.com/embed/VUFmhKpZKlE",
      title: "Spider-Man: Far From Home | Teaser Trailer"
    },
    {
      link: "https://www.youtube.com/embed/VUFmhKpZKlE",
      title: "Spider-Man: Far From Home | Teaser Trailer"
    },
    {
      link: "https://www.youtube.com/embed/VUFmhKpZKlE",
      title: "Spider-Man: Far From Home | Teaser Trailer"
    }
  ];
  slideConfig = {"slidesToShow": 6, "slidesToScroll": 1, "infinite": false};

  constructor() {}

  ngOnInit() {
  }

}
