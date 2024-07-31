// crud.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: string): Observable<any> {  // Cambiado a string
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  update(id: string, item: any): Observable<any> {  // Cambiado a string
    return this.http.put<any>(`${this.apiUrl}/${id}`, item);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
