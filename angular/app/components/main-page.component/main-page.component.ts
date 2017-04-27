import { Component, OnInit } from '@angular/core';
import { SectorService } from '../../services/sector.service';
import { GameService } from '../../services/game.service';
import { Sector } from '../../models/sector';
import { Game } from '../../models/game';
import { Ticket } from '../../models/ticket';

@Component({
    selector: 'sector-list',
    templateUrl: './app/components/main-page.component/main-page.template.html',
    styleUrls: ['./app/components/main-page.component/main-page.component.css'],
    providers: [SectorService, GameService],
})
export class MainPageComponent implements OnInit {
    private sectors: Sector[];
    private games: Game[];
    private selectedGame: Game;

    constructor(private sectorService: SectorService, private gameService: GameService) { }

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

}