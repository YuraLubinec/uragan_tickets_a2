import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Sector } from '../models/sector';

@Injectable()
export class SectorService {

    private baseUrl = 'http://localhost:8080/uragan/main';

    constructor(private http: Http) {
    }

    getAllSectors(): Promise<Sector[]> {
        return this.http.get(this.baseUrl)
            .toPromise()
            .then(response => response.json() as Sector[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}