import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sector } from '../../models/sector';
import { Game } from '../../models/game';
import { Ticket } from '../../models/ticket';
import { Seat } from '../../models/seat';

@Component({
  selector: 'sector',
  templateUrl: './app/components/sector.component/sector.template.html',
  styleUrls: ['./app/components/sector.component/sector.component.css']
})
export class SectorComponent {

  @Input() sector: Sector;
  @Input() selectedGame: Game;
  @Output() selectedSeat: EventEmitter<Seat> = new EventEmitter<Seat>();
  @Output() isOccupied: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  markOccupied(id: number): boolean {
    return (this.selectedGame && this.selectedGame.tickets.find(ticket => ticket.seat_id === id)) ? true : false;
  }

  selectSeat(seat: Seat, occupied: boolean) {
    this.isOccupied.emit(occupied);
    this.selectedSeat.emit(seat);
  }

}