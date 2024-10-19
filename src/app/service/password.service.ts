import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Password } from '../models/password.model';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = 'https://localhost:7227/api/passwords'; // Update this URL to your backend API

  constructor(private http: HttpClient) {}

  getPasswords(): Observable<Password[]> {
    return this.http.get<Password[]>(this.apiUrl);
  }

  getPassword(id: string): Observable<Password> {
    return this.http.get<Password>(`${this.apiUrl}/${id}`);
  }

  addPassword(password: Password): Observable<Password> {
    return this.http.post<Password>(this.apiUrl, password);
  }

  updatePassword(password: Password): Observable<Password> {
    return this.http.put<Password>(`${this.apiUrl}/${password.id}`, password);
  }

  deletePassword(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
