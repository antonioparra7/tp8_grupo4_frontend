import { Component } from '@angular/core';
import { CopiaService } from '../../services/copia-service';
import { LectorService } from '../../services/lector-service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css'
})
export class Prestamos {

  listaCopias: any[] = [];
  listaLectores: any[] = [];

  formulario: FormGroup;
  constructor(private copiaService: CopiaService, private lectorService: LectorService) {
    this.formulario = new FormGroup({
      'copia': new FormControl('', []),
      'lector': new FormControl('', [])
    });
  }

  ngOnInit() {
    this.listarCopias();
    this.listarLectores();
  }

  listarCopias() {
    this.copiaService.listarCopias().subscribe(
      (data: any) => {
        this.listaCopias = data;
      },
      (error: any) => {
        console.error('Error al listar copias:', error);
      }
    );
  }

  listarLectores() {
    this.lectorService.listarLectores().subscribe(
      (data: any) => {
        this.listaLectores = data;
      },
      (error: any) => {
        console.error('Error al listar lectores:', error);
      }
    );
  }

  prestar() {
    const copiaId = this.formulario.get('copia')?.value;
    const nombreLector = this.formulario.get('lector')?.value;
    console.log('Copia seleccionada:', copiaId);
    console.log('Lector seleccionado:', nombreLector);
    alert(`Copia ID: ${copiaId}, Lector ID: ${nombreLector}`);
  }

}
