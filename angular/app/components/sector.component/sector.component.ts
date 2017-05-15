import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sector } from '../../models/sector';
import { Game } from '../../models/game';
import { Seat } from '../../models/seat';
import { Subscription } from '../../models/subscription';

@Component({
  selector: 'sector',
  templateUrl: './app/components/sector.component/sector.template.html',
  styleUrls: ['./app/components/sector.component/sector.component.css']
})
export class SectorComponent {

  @Input() sector: Sector;
  @Input() selectedGame: Game;
  @Input() subscribtions : Subscription[];
  @Output() selectedSeat: EventEmitter<Seat> = new EventEmitter<Seat>();
  @Output() isOccupied: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  markOccupied(id: number): boolean {
    return this.selectedGame.tickets.find(ticket => ticket.seat_id === id) ? true : false;
  }

  markSubscribed(id: number): boolean {
    return this.subscribtions.find(subscription => subscription.seat_id === id) ? true : false;
  }

  setTip(id: number): string {
    let subscr : Subscription = this.subscribtions.find(subscription => subscription.seat_id === id);
    return subscr ? "Сезонний абонемент на ім'я: "+subscr.fullName : null;
  }

  selectSeat(seat: Seat, occupied: boolean) {
    this.isOccupied.emit(occupied);
    this.selectedSeat.emit(seat);
  }

}