import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselComponent, SafePipe } from './slick-carousel/slick-carousel.component';
import { NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [SlickCarouselComponent, SafePipe],
  imports: [
    CommonModule,
    SlickCarouselModule,
    NgZorroAntdModule
  ],
  exports: [SlickCarouselComponent]
})
export class RecSlickCarouselModule { }
