import { Libros } from './components/libros/libros';
import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';

export const routes: Routes = [{
    path:"libros", component:Libros
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppModule{}
