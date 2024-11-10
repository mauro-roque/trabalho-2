import { Component } from '@angular/core';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categoria = {
    nome: '',
    ativo: true,
  };

  unidadeFederativa = {
    nome: '',
    sigla: '',
    ativo: true,
  };

  constructor(private cadastroService: CadastroService) {}

  cadastrarCategoria() {
    this.cadastroService.cadastrarCategoria(this.categoria).subscribe((response) => {
      console.log('Categoria cadastrada com sucesso!', response);
      this.categoria = { nome: '', ativo: true }; // Limpar o formulário
    });
  }

  cadastrarUnidadeFederativa() {
    this.cadastroService.cadastrarUnidadeFederativa(this.unidadeFederativa).subscribe((response) => {
      console.log('Unidade Federativa cadastrada com sucesso!', response);
      this.unidadeFederativa = { nome: '', sigla: '', ativo: true }; // Limpar o formulário
    });
  }
}
