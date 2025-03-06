import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../../../shared/models/contato';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CompromissoService {
  private apiUrl = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}

  getCompromissos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }

  createCompromisso(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato);
  }

  updateCompromisso(contato: Contato): Observable<Contato> {
    const url = `${this.apiUrl}/${contato.id}`;
    return this.http.put<Contato>(url, contato);
  }

  deleteCompromisso(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
