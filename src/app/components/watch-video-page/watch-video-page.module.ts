import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchVideoPageComponent } from './watch-video-page.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [WatchVideoPageComponent, VideoPlayerComponent, VideoDetailComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [WatchVideoPageComponent]
})
export class WatchVideoPageModule { }
