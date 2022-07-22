import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent{
  public title: string = 'Mi primer componente';
  public name: string = 'Andy Vega';
  /* private lastname: string = 'Ordoñez'; */
  public usuario!: string;
  public ciudades = ['Lima', 'Chiclayo', 'Chongoyape'];
  public selection!: string;

  constructor() { }
 /*  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges, input carga antes del onInit -->', changes);
  }

  ngOnInit(): void {
    console.log('OnIntit-->', this.lastname);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
    console.log('OnDestroy-->');
  } */

  /* Methods */

  public seleccionarCiudad(ciudad: string){
    console.log('ciudad-->', ciudad);
    this.selection = ciudad;
  }

  public limpiarSelection(){
    this.selection = '';
  }



}
