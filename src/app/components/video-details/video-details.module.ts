import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDetailsComponent } from './video-details.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [VideoDetailsComponent, VideoPlayerComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [VideoDetailsComponent]
})
export class VideoDetailsModule { }
