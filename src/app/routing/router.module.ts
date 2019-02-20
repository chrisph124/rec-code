import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationComponent } from '../components/recommendation/recommendation.component';
import { VideoDetailsComponent } from '../components/video-details/video-details.component';
import { NotFoundComponent } from '../components/page/404/not-found.component';

const routes: Routes = [
  { path: '', component: RecommendationComponent },
  { path: 'details/:id', component: VideoDetailsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
