import { Component, PipeTransform, Pipe, OnInit, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

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
  @Input() mediaJSON;

  slideConfig = {"slidesToShow": 6, "slidesToScroll": 1, "infinite": false};

  constructor() {}

  ngOnInit() {}

}
