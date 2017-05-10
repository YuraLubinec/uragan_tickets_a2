export class Ticket {
    id: number;
    game_id: number;
    seat_id: number;

    constructor(game_id: number, seat_id : number){
        this.id = null;
        this.game_id = game_id;
        this.seat_id = seat_id;
    }
}