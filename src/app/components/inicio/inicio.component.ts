import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  edad = 25
  peso = 60
  altura = 170
  sexo = 'Masculino'

  constructor(private router: Router) {

  }

  cambiarAltura(e: any) {
    this.altura = e.target.value
  }

  masculino() {
    this.sexo = 'Masculino'
  }

  femenino() {
    this.sexo = 'Femenino'
  }

  calcularMBI() {
    const bmi = this.peso / Math.pow(this.altura / 100, 2)

    this.router.navigate(['/resultado', bmi.toFixed(1)])
  }
}
