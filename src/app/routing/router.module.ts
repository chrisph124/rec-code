import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationComponent } from "../components/recommendation/recommendation.component";
import { VideoDetailsComponent } from "../components/video-details/video-details.component";

const routes: Routes = [
  { path: '', component: RecommendationComponent },
  { path: 'details', component: VideoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
