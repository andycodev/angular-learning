import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string;
  ciudades: Array<any>;
  ciudadSeleccionada!: string;

  constructor() {
    this.title = 'angular-learning';
    this.ciudades = [
      {
        'id': 1,
        'nombre': 'Lima'
      },
      {
        'id': 2,
        'nombre': 'Chiclayo'
      },
      {
        'id': 3,
        'nombre': 'Chongoyape'
      },
      {
        'id': 4,
        'nombre': 'Huaca Blanca'
      }
    ]
  }

  ngOnInit(): void {
    console.log('onInit');
    
  }

  public seleccionarCiudad(ciudad: string){
    this.ciudadSeleccionada = ciudad;
    console.log('La ciudad es: ', ciudad);
  }

  public limpiarCiudadSeleccionada(){
    this.ciudadSeleccionada = '';
  }
  

}

