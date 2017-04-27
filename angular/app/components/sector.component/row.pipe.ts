import { Pipe } from '@angular/core';
import { Seat } from '../../models/seat';

@Pipe({ name: "row" })
export class Row {
  transform(array: Array<Seat>, row: number): Array<Seat> {
    return array.filter(seat => seat.row === row);
  }
}