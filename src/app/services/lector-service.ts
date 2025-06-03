import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LectorService {

  headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

  constructor(private httpClient: HttpClient) { }

  listarLectores(): any {
    
    return this.httpClient.get('http://localhost:8080/lector/listado', { headers: this.headers });
  }

}
