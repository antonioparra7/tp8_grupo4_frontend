import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { LibroService } from '../../services/libro-service';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-libros',
  standalone: true,
  providers: [LibroService],
  imports: [
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './libros.html',
  styleUrl: './libros.css'
})
export class Libros {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private libroService: LibroService) {
    this.formulario = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      editorial: ['', [Validators.required]],
      anyo: ['', [Validators.required]]
    });
  }

  displayedColumns: string[] = ['titulo', 'tipo', 'editorial', 'anyo'];
  listaLibros: any[] = [];
  libro: any;

  ngOnInit() {
    this.listarLibros();
  }

  // Agregar un libro
  agregarLibro() {
    if (this.formulario.valid) {
      this.libro = {
        titulo: this.formulario.get('titulo')?.value,
        tipo: this.formulario.get('tipo')?.value,
        editorial: this.formulario.get('editorial')?.value,
        anyo: this.formulario.get('anyo')?.value
      };
      console.log('Libro agregado:', this.libro);
      this.formulario.reset();
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }

    this.libroService.agregarLibro(this.libro).subscribe(
      (response: any) => {
        console.log("Respuesta: ", response);
        alert("Libro agregado correctamente");
      },
      (error: any) => {
        alert("Error");
      }
    )
  }

  // Listar libros
  listarLibros() {
    this.libroService.listarLibros().subscribe(
      (response: any) => {
        console.log("Libros obtenidos:", response);
        this.listaLibros = response;
      },
      (error: any) => {
        console.error("Error al listar libros:", error);
        alert("Error al listar libros");
      }
    );
  }

  goPrestamos() {
    
  }

}
