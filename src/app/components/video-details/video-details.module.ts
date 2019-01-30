import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDetailsComponent } from './video-details.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { CommentsAndReviewsComponent } from './comments-and-reviews/comments-and-reviews.component';

@NgModule({
  declarations: [VideoDetailsComponent, VideoPlayerComponent, MovieInfoComponent, CommentsAndReviewsComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [VideoDetailsComponent]
})
export class VideoDetailsModule { }
