import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ReactiveFormsModule } from '@angular/forms';
import { RecSlickCarouselModule } from './slick-carousel/slick-carousel.module';
import { MomentModule } from 'ngx-moment';

import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { LoginComponent } from './components/header/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';

import { AppRoutingModule } from './routing/router.module';
import { VideoDetailsModule } from './components/video-details/video-details.module';
import { DataService } from './services/data.service';
import { NotFoundComponent } from './components/page/404/not-found.component';
import { AuthenticationService } from './services/authentication.service';
import { ListMovieComponent } from './components/list-movie/list-movie.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NavigationComponent,
    LoginComponent,
    RecommendationComponent,
    NotFoundComponent,
    ListMovieComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    BrowserAnimationsModule,
    VideoDetailsModule,
    ReactiveFormsModule,
    RecSlickCarouselModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    DataService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
