import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../../shared/models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CompromissoService {
  private apiUrl = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}

  getCompromissos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  createCompromisso(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  updateCompromisso(usuario: Usuario): Observable<Usuario> {
    const url = `${this.apiUrl}/${usuario.id}`;
    return this.http.put<Usuario>(url, usuario);
  }

  deleteCompromisso(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
