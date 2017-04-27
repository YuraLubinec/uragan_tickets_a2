import {Seat} from './seat'

export class Sector {
    id: number;
    name: string;
    price: number;
    seats: Array<Seat>;
}