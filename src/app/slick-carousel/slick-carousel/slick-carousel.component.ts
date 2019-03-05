import { Component, PipeTransform, Pipe, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
export class SlickCarouselComponent implements OnInit, OnDestroy, OnChanges {
  @Input() titleCarousel;
  loading: Boolean = true;
  mockMovie = new Movie();
  mockData: Movie[] = [this.mockMovie, this.mockMovie, this.mockMovie, this.mockMovie
    , this.mockMovie, this.mockMovie, this.mockMovie, this.mockMovie];
  @Input() listVideo: Movie[];
  private sub: Subscription;

  slideConfig = {
    slidesToShow: 8,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-custom-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-custom-next">Next</button>',
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
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
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  constructor(private router: Router, private dataService: DataService, private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.listVideo.currentValue && changes.listVideo.currentValue.length > 0) {
      this.loading = false;
      this.listVideo = changes.listVideo.currentValue;
    } else {
      this.loading = true;
      this.listVideo = this.mockData;
    }
  }

  showDetailVideo(movieId: any) {
    this.router.navigate(['/details/' + movieId]);
  }

  ngOnDestroy() {
    this.listVideo = [];
    this.loading = true;
  }
}
