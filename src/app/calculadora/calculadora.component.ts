import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  primeiroValor! : number;
  segundoValor! : number;
  resultado! : number;

  constructor() { }

  ngOnInit(): void {
  }

  somar() {
    this.resultado = this.primeiroValor + this.segundoValor;
  }

  subtrair() {
    this.resultado = this.primeiroValor - this.segundoValor;
  }

  multiplicar() {
    this.resultado = this.primeiroValor * this.segundoValor;
  }

  dividir() {
    this.resultado = this.primeiroValor / this.segundoValor;
  }
}
