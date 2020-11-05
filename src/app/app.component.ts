import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'disney';

  rutas = [{
    nombre: 'Home',
    url: '/home',
    icon: ''
  },
  {
    nombre: 'Personajes',
    url: '/personajes',
    icon: ''
  }]
}
