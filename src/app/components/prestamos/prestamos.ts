import { Component } from '@angular/core';
import { CopiaService } from '../../services/copia-service';
import { LectorService } from '../../services/lector-service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css'
})
export class Prestamos {

  listaCopias: any[] = [];
  listaLectores: any[] = [];

  formulario: FormGroup;
  constructor(private copiaService:CopiaService, private lectorService:LectorService) {
    this.formulario = new FormGroup({});
  }

  ngOnInit() {
    this.listarCopias();
    this.listarLectores();
  }

  listarCopias() {
    this.copiaService.listarCopias().subscribe(
      (data: any[]) => {
        this.listaCopias = data;
      },
      (error: any) => {
        console.error('Error al listar copias:', error);
      }
    );
  }

  listarLectores() {
    this.lectorService.listarLectores().subscribe(
      (data: any[]) => {
        this.listaLectores = data;
      },
      (error: any) => {
        console.error('Error al listar lectores:', error);
      }
    );
  }

  prestar() {
    alert("Muy bien machote , has prestado un libro");
  }

}
