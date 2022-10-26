import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrls: ['./calcula-media.component.css']
})
export class CalculaMediaComponent implements OnInit {
  notaAc1! : number;
  notaAc2! : number;
  notaAg! : number;
  notaAf! : number;
  notaFinal!: number;
  situacao! : String;

  constructor() { }

  ngOnInit(): void {
  }

  calcular() {
    this.notaFinal = (this.notaAc1 * 0.15) + (this.notaAc2 * 0.3) + (this.notaAg * 0.1) + (this.notaAf * 0.45);

    if (this.notaFinal > 5) {
      this.situacao = 'Aprovado';
    } else {
      this.situacao = 'Reprovado';
    }
  }

}
