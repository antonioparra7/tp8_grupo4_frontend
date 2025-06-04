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

  listaCopiasBiblioteca: any[] = [];

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
        console.log('Copias obtenidas:', data);
        this.listaCopias = data;
        this.filtrarCopiasBiblioteca();
      },
      (error: any) => {
        console.error('Error al listar copias:', error);
      }
    );
  }

  filtrarCopiasBiblioteca() {
    this.listaCopiasBiblioteca = this.listaCopias.filter(copia => copia.estado === 'BIBLIOTECA');
    console.log('Copias en estado BIBLIOTECA:', this.listaCopiasBiblioteca);
  }

  listarLectores() {
    this.lectorService.listarLectores().subscribe(
      (data: any) => {
        console.log('Lectores obtenidos:', data);
        this.listaLectores = data;
      },
      (error: any) => {
        console.error('Error al listar lectores:', error);
      }
    );
  }

  prestar() {
    const idCopia = this.formulario.get('copia')?.value;
    const idLector = this.formulario.get('lector')?.value;

    // Comprobar que la copia esté en estado biblioteca
    const copiaSeleccionada = this.listaCopias.find(c => c.id === parseInt(idCopia));
    
    if (copiaSeleccionada && copiaSeleccionada.estado === 'BIBLIOTECA') {
      this.copiaService.prestarCopia(parseInt(idCopia), parseInt(idLector)).subscribe(
        (response: any) => {
          console.log('Préstamo realizado con éxito:', response);
          if (response) {
            this.listarCopias();
            alert('Préstamo realizado con éxito');
          } else {
            alert('No se pudo realizar el préstamo. Verifique que la copia y el lector existan.');
          }
        },
        (error: any) => {
          console.error('Error al realizar el préstamo:', error);
        }
      );
    } else {
      alert('La copia no está disponible para préstamo o no existe.');
    }


  }

}
