import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Season } from '../models/season'

@Injectable()
export class SeasonService {

  private baseUrl = 'http://localhost:8080/uragan/main/season';

  constructor(private http: Http) {
  }

  getSeason(id: number): Promise<Season> {
    return this.http.get(this.baseUrl + "/" + id)
      .toPromise()
      .then(response => response.json() as Season)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}