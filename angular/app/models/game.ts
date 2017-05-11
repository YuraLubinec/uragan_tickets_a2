import {Ticket} from './ticket'

export class Game{
    id: number;
    firstTeam: string;
    secondTeam: string;
    date: string;
    time: string;
    season_id: number
    tickets: Array<Ticket>;
}