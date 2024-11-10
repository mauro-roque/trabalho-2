import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private categoriaUrl = 'http://localhost:8080/categorias';
  private ufUrl = 'http://localhost:8080/unidade-federativa-recursos';

  constructor(private http: HttpClient) {}

  cadastrarCategoria(categoria: any): Observable<any> {
    return this.http.post(this.categoriaUrl, categoria);
  }

  cadastrarUnidadeFederativa(unidadeFederativa: any): Observable<any> {
    return this.http.post(this.ufUrl, unidadeFederativa);
  }
}
