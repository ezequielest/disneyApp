import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Personajes } from '../interfaces/personajes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() { }

  getPersonajes(): Observable<Array<Personajes>> {
    return of([{
      nombre: 'Mr Increible',
      biografia: 'lorem',
      foto: 'mr-increible.png',
      banner: '',
      cantidadPeliculas: 3,
      tieneVideojuego: false,
      soloPeliculaAnimada: false
    },
    {
      nombre: 'Dory',
      biografia: 'lorem',
      foto: 'dory.png',
      banner: '',
      cantidadPeliculas: 4,
      tieneVideojuego: false,
      soloPeliculaAnimada: false
    }]);
  }
}
