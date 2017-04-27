import { Component, Input } from '@angular/core';
import { Sector } from '../../models/sector';
import { Game } from '../../models/game';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'sector',
  templateUrl: './app/components/sector.component/sector.template.html',
  styleUrls: ['./app/components/sector.component/sector.component.css']
})
export class SectorComponent {

  @Input() sector: Sector;
  @Input() selectedGame: Game;

  markOccupied(id: number): boolean {
    return (this.selectedGame && this.selectedGame.tickets.find(ticket => ticket.id === id)) ? true : false;
  }

}