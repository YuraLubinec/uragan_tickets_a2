import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game';


@Component({
    selector: 'game-list',
    templateUrl: './app/components/game.component/game.template.html',
    styleUrls: ['./app/components/game.component/game.component.css'],
    providers: [GameService],
})
export class GameComponent implements OnInit{
    private games: Game[];
    constructor(private gameService: GameService) { }

        ngOnInit(): void{
            this.getGames();
        }

        getGames(): void {
        this.gameService.getGames().then(games => this.games = games);
        }
}