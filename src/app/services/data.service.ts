import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { GroupMovie } from '../models/groupMovie';


@Injectable()
export class DataService {
    private static URL = environment.api_url;

    constructor(private httpClient: HttpClient) {
    }

    public getListMovies(groupName: string, userId: string, movieId: string): Observable<GroupMovie[]> {
        let body = {
            "userId": userId,
            "groupName": groupName 
         };
         if (movieId) {
             body = Object.assign({itemId: movieId}, body);
         }
        return this.httpClient.post<GroupMovie[]>(DataService.URL + '/api/v3/recommendation', body);
    }


    public getMovieById(movieId: string): Observable<Movie> {
        return this.httpClient.get<Movie>(DataService.URL + '/api/item?itemId=' + movieId);
    }
}
