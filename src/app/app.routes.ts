import { Libros } from './components/libros/libros';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:"libros", component:Libros},
    {path:"", redirectTo:"libros", pathMatch:"full"},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppModule{}
