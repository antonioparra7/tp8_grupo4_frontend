import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private httpClient: HttpClient) { }

  agregarLibro(libro: any): any {
    return this.httpClient.post('http://localhost:8080/libros/addLibro', libro, { headers: this.headers });
  }

  listarLibros():any {
    return this.httpClient.get('http://localhost:8080/libros/listado', { headers: this.headers });
  }

}
