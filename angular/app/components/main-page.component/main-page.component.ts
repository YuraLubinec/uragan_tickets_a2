import { Component, OnInit } from '@angular/core';
import { SectorService } from '../../services/sector.service';
import { GameService } from '../../services/game.service';
import { TicketService } from '../../services/ticket.service';
import { Sector } from '../../models/sector';
import { Game } from '../../models/game';
import { Ticket } from '../../models/ticket';
import { Seat } from '../../models/seat';

@Component({
    selector: 'sector-list',
    templateUrl: './app/components/main-page.component/main-page.template.html',
    styleUrls: ['./app/components/main-page.component/main-page.component.css'],
    providers: [SectorService, GameService, TicketService],
})
export class MainPageComponent implements OnInit {
    private sectors: Sector[];
    private games: Game[];
    private selectedGame: Game;
    private selectedSeat: Seat;
    private selectedSeatSectorName: String;
    private hideModal: boolean;
    private isOccupied: boolean;

    constructor(private sectorService: SectorService, private gameService: GameService, private ticketService: TicketService) { }

    ngOnInit(): void {
        this.getSectors();
        this.getGames();
    }

    getSectors(): void {
        this.sectorService.getAllSectors().then(sectors => this.sectors = sectors);
    }

    getGames(): void {
        this.gameService.getGames().then(games => this.games = games);
    }

    update(game_id: number): void {
        this.gameService.getGames().then(games => { this.games = games; this.selectedGame = games.find(game => game.id === game_id) });
    }


    getSelectedSeat(seat: Seat, name: String) {
        this.selectedSeat = seat;
        this.selectedSeatSectorName = name;
    }

    markAsOccupied(isOccupied: boolean) {
        this.isOccupied = isOccupied;

    }

    saveTicket(game_id: number, seat_id: number) {
        this.ticketService.saveTicket(new Ticket(game_id, seat_id)).then(response => this.update(this.selectedGame.id));
    }

    deleteTicket(seat_id: number) {
        this.ticketService.deleteTicket(this.selectedGame.tickets.find(ticket => ticket.seat_id === seat_id).id).then(response => this.update(this.selectedGame.id));
    }

}