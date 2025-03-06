import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compromisso } from '../../../shared/models/compromisso';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CompromissoService {
  private apiUrl = 'http://localhost:3000/compromissos';

  constructor(private http: HttpClient) {}

  getCompromissos(): Observable<Compromisso[]> {
    return this.http.get<Compromisso[]>(this.apiUrl);
  }

  createCompromisso(compromisso: Compromisso): Observable<Compromisso> {
    return this.http.post<Compromisso>(this.apiUrl, compromisso);
  }

  updateCompromisso(compromisso: Compromisso): Observable<Compromisso> {
    const url = `${this.apiUrl}/${compromisso.id}`;
    return this.http.put<Compromisso>(url, compromisso);
  }

  deleteCompromisso(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
