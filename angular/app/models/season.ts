import {Game} from './game'
import {Subscription} from './subscription'

export class Season{
    id: number;
    years: string;
    games: Array<Game>;
    subscriptions:Array<Subscription>
}