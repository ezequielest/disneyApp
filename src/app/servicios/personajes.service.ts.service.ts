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
      biografia: 'Robert "Bob" Parr es el personaje principal de la película Los Increíbles. Trabaja en una empresa, aunque anteriormente llevaba una doble vida secreta y era conocido como Mr. Increíble, un superhéroe con gran fuerza. ... Bob está casado con Helen, la cual también era una superheroína llamada Elastigirl.',
      foto: 'mr-increible.png',
      banner: '',
      cantidadPeliculas: 3,
      tieneVideojuego: false,
      soloPeliculaAnimada: true
    },
    {
      nombre: 'Dory',
      biografia: 'Dory, la pez azul que ayuda a Merlin a encontrar a su hijo Nemo indagará en su olvidado pasado en "Buscando a Dory", película que toma lugar seis meses después de las aventuras que vivió a lado de los recién encontrados peces payasos. Ella es una pez cirujano azul y negro muy divertida. Sufre de amnesia anterógrada.',
      foto: 'dory.png',
      banner: '',
      cantidadPeliculas: 4,
      tieneVideojuego: false,
      soloPeliculaAnimada: true
    },
    {
      nombre: 'Aladin',
      biografia: 'Aladdín es un joven pobre que, junto con su mono Abú, se dedica a robar y engañar a la gente de Agrabah para poder sobrevivir. ... Luego, estando bajo tierra, Abú le enseña la lámpara, que había recuperado. Al frotarla, descubre que en ella reside un genio que le concederá tres deseos.',
      foto: 'aladdin.png',
      banner: '',
      cantidadPeliculas: 2,
      tieneVideojuego: false,
      soloPeliculaAnimada: false
    }]);
  }
}
