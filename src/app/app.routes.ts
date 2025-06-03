import { Libros } from './components/libros/libros';
import { Prestamos } from './components/prestamos/prestamos';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "libros", component: Libros },
    { path: "", redirectTo: "libros", pathMatch: "full" },
    { path: "prestamos", component: Prestamos }
];


