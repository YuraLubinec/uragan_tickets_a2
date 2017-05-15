import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subscription } from '../models/subscription'

@Injectable()
export class SubscriptionService {

  private baseUrl = 'http://localhost:8080/uragan/main/subscription';

  constructor(private http: Http) {
  }

  getSubscriptions(): Promise<Subscription[]> {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response => response.json() as Subscription[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}