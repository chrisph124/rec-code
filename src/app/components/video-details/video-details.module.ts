import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { VideoDetailsComponent } from './video-details.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { CommentsAndReviewsComponent } from './comments-and-reviews/comments-and-reviews.component';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@NgModule({
  declarations: [VideoDetailsComponent, VideoPlayerComponent, MovieInfoComponent, CommentsAndReviewsComponent, MovieItemComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SlickCarouselModule
  ],
  exports: [VideoDetailsComponent]
})
export class VideoDetailsModule { }
