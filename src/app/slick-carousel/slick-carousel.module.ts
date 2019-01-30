import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselComponent } from './slick-carousel/slick-carousel.component';
import { NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [SlickCarouselComponent],
  imports: [
    CommonModule,
    SlickCarouselModule,
    NgZorroAntdModule
  ],
  exports: [SlickCarouselComponent]
})
export class RecSlickCarouselModule { }
