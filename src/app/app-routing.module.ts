import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { CalculaMediaComponent } from './calcula-media/calcula-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PaginaNaoEncontradaComponent } from './compartilhados/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {path: 'calcula-media', component: CalculaMediaComponent},
  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'cadastro-aluno', component: CadastroAlunoComponent},
  {path: 'apolice-seguro', component: ApoliceSeguroComponent},
  {path: '**', component: PaginaNaoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
