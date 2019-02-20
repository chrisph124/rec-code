import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userId: string;
  isAuthenticated: Boolean = false;

  constructor(private http: HttpClient) { }

  setIsAuthenticated(value: Boolean) {
    this.isAuthenticated = value;
  }

  setUserId(userId: string) {
    this.userId = userId;
  }

  login(userId: string): Observable<Boolean> {
    return this.http.post<Boolean>(environment.api_url + `/api/login?userId=${userId}`, null)
    .pipe(map(response => {
      if ((response as any).status === 'success') {
        this.setIsAuthenticated(true);
        this.setUserId(userId);
        return true;
      } else {
        this.setIsAuthenticated(false);
        return false;
      }
    }));
  }
  logout() {
    this.setIsAuthenticated(false);
    this.userId = null;
  }
}
