import { Pipe } from '@angular/core';
import { Game } from '../../models/game';

@Pipe({ name: "sortBy" })
export class SortBy {
    transform(array: Array<Game>, args: string): Array<Game> {
        array.sort((a: any, b: any) => {
            if (a[args] < b[args]) {
                return -1;
            } else if (a[args] > b[args]) {
                return 1;
            } else {
                return 0;
            }
        });
        return array;
    }
}