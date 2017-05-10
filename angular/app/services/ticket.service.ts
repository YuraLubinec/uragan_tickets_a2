import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Ticket } from '../models/ticket';

@Injectable()
export class TicketService {

  private baseUrl = 'http://localhost:8080/uragan/main';

  constructor(private http: Http) {
  }

  saveTicket(ticket: Ticket) {
    return this.http.post(this.baseUrl, ticket).toPromise().catch(this.handleError);
  }

  deleteTicket(ticket_id : Number){
    return this.http.delete(this.baseUrl+"/"+ticket_id).toPromise().catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred when saving Ticket', error);
    return Promise.reject(error.message || error);
  }



}