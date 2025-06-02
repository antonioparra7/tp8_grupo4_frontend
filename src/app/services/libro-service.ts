import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private httpClient: HttpClient) { }

  agregarLibro(libro: any): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.httpClient.post('http://localhost:8080/libros/addLibro', libro, { headers: headers });
  }
}
