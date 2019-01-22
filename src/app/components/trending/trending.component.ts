import { Component, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
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
