import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';


@Injectable()
export class DataService {
    private static URL = environment.api_url;

    constructor(private httpClient: HttpClient) {
    }

    public getListMovies(type: string, userId: string, movieId: string): Observable<Movie[]> {
        let body = {
            type: type,
            userId: userId,
            movieId: movieId
        };
        if (type === 'trending') {
             delete body.userId;
             delete body.movieId;
        }

        if (type === 'similarity') {
            delete body.userId;
        }

        if (type === 'lastaction') {
            delete body.movieId;
        }
        return this.httpClient.post<Movie[]>(DataService.URL + '/api/v2/recommendation', body);
    }


    public getMovieById(movieId: string): Observable<Movie> {
        return this.httpClient.get<Movie>(DataService.URL + '/api/movie?movieId=' + movieId);
    }
}
