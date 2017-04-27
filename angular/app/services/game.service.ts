import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Game} from '../models/game'

@Injectable()
export class GameService {

    private baseUrl = 'http://localhost:8080/uragan/main/games';
    constructor(private http: Http) {

    }

    getGames(): Promise <Game[]> {
        return this.http.get(this.baseUrl)
            .toPromise()
            .then(response => response.json() as Game[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}