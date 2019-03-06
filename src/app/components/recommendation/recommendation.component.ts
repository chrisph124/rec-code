import { Component, OnInit, OnDestroy } from '@angular/core';
import { GroupMovie } from 'src/app/models/groupMovie';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-rec-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit, OnDestroy {
  listCarousel: GroupMovie[];
  private sub: Subscription;
  constructor(private dataService: DataService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.sub = this.dataService.getListMovies('user_action', this.authService.userId, null)
      .subscribe(data => {
        if (data && data.length > 0) {
          this.listCarousel = data;
        } 
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
