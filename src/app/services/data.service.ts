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

    public getListMovies(type: string, userId: string): Observable<Movie[]> {
        const body = {
            type: type,
            userId: userId
        };
        return this.httpClient.post<Movie[]>(DataService.URL + '/api/v2/recommendation', body);
    }

    public getMovieById(movieId: string): Observable<Movie> {
        return this.httpClient.get<Movie>(DataService.URL + '/api/v2/recommendation/video/' + movieId);
    }
}
