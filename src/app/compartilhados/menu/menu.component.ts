import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: any = [
    { rota: 'calcula-media', titulo: 'Calcular Média' },
    { rota: 'calculadora', titulo: 'Calculadora' },
    { rota: 'cadastro-aluno', titulo: 'Cadastrar Aluno' },
    { rota: 'apolice-seguro', titulo: 'Apólice de Seguro' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
