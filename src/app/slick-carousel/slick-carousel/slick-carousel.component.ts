import { Component, PipeTransform, Pipe, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'rec-slick-carousel',
  templateUrl: './slick-carousel.component.html',
  styleUrls: ['./slick-carousel.component.css']
})
export class SlickCarouselComponent implements OnInit {
  @Input() listVideo;
  @Input() titleCarousel;
  @Input() loading;

  slideConfig = {
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor(private router: Router) {}

  ngOnInit() {
    let mockData = [];
    const movie = new Movie();
      movie.poster = '/assets/loading_image.gif';
      for (let i = 0; i < 8; i++) {
        mockData.push(movie);
      }
    if (this.loading) {
      this.listVideo = mockData;
    }
  }

  showDetailVideo(movieId: any) {
    this.router.navigate(['/details/' + movieId]);
  }
}
