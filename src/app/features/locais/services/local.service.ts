import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Local } from '../../../shared/models/local';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CompromissoService {
  private apiUrl = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}

  getCompromissos(): Observable<Local[]> {
    return this.http.get<Local[]>(this.apiUrl);
  }

  createCompromisso(local: Local): Observable<Local> {
    return this.http.post<Local>(this.apiUrl, local);
  }

  updateCompromisso(contato: Local): Observable<Local> {
    const url = `${this.apiUrl}/${contato.id}`;
    return this.http.put<Local>(url, contato);
  }

  deleteCompromisso(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
