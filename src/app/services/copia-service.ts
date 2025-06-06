import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CopiaService {
  

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private httpClient:HttpClient) { }

  listarCopias():any {
    return this.httpClient.get('http://localhost:8080/copia/listado', { headers: this.headers });
  }

  prestarCopia(idCopia: number, idLector: number) {
    return this.httpClient.put(`http://localhost:8080/prestamos/prestarCopia/${idCopia}/${idLector}`, {headers: this.headers});
  }
}
