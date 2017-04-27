import { Pipe } from '@angular/core';
import { Sector } from '../../models/sector';

@Pipe({ name: "sectorPipe" })
export class SectorPipe {
  transform(array: Array<Sector>, id: number): Array<Sector> {
      return array ? array.filter(sector => sector.id === id) : array;
  }
}