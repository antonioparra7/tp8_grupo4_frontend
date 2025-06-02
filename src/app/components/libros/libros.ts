import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-libros',
  imports: [MatButtonModule,MatTableModule, MatInputModule,MatFormFieldModule,FormsModule,MatSelectModule],
  templateUrl: './libros.html',
  styleUrl: './libros.css'
})
export class Libros {
    displayedColumns: string[] = ['titulo', 'tipo', 'editorial','anyo'];
    dataSource = [{titulo: 'Harry Potter', tipo: 'NOVELA', editorial: 'Libro de bolsillo', anyo:1623}];
}
