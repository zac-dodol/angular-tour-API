import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, status: 'active' , power: 'kuat', name: 'Dr Nice' },
      { id: 12, status: 'passive' , power: 'laju', name: 'Narco' },
      { id: 13, status: 'active' , power: 'terbang', name: 'Bombasto' },
      { id: 14, status: 'passive' , power: 'laser', name: 'Celeritas' },
      { id: 15, status: 'active' , power: 'kaca', name: 'Magneta' },
      { id: 16, status: 'active' , power: 'diamond', name: 'RubberMan' },
      { id: 17, status: 'passive' , power: 'hasut', name: 'Dynama' },
      { id: 18, status: 'active' , power: 'pandai', name: 'Dr IQ' },
      { id: 19, status: 'passive' , power: 'besar', name: 'Magma' },
      { id: 20, status: 'active' , power: 'psycho', name: 'Tornado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
