// Objeto libro
export class Libro {
  id: number;
  titulo: string;
  tipo: string;
  editorial: string;
  anyo: number;

  constructor(id: number, titulo: string, tipo: string, editorial: string, anyo: number) {
    this.id = id;
    this.titulo = titulo;
    this.tipo = tipo;
    this.editorial = editorial;
    this.anyo = anyo;
  }
}