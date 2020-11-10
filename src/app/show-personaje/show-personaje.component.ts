import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personajes } from '../interfaces/personajes.interfaces';
import { PersonajesService } from '../servicios/personajes.service.ts.service';

@Component({
  selector: 'app-show-personaje',
  templateUrl: './show-personaje.component.html',
  styleUrls: ['./show-personaje.component.scss']
})
export class ShowPersonajeComponent implements OnInit {

  idPersonaje: string;
  personajes: Array<Personajes>;
  personaje: Personajes;

  constructor(private rutaActiva: ActivatedRoute, private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.idPersonaje = this.rutaActiva.snapshot.params.id;

    console.log(this.idPersonaje)

    this.personajesService.getPersonajes().subscribe((response: Array<Personajes>) => {
      this.personajes = response;
      this.searchCharacter();      
    });
  }


  searchCharacter() {
    const personajeEncontrado = this.personajes.filter(el => {
      return el.id === parseInt(this.idPersonaje);
    });
    this.personaje = personajeEncontrado[0];
  }

}
