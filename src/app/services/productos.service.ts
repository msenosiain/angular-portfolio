import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoProducto } from '../interfaces/info-producto.interface';
import { DetalleProducto } from '../interfaces/detalle-producto.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient: HttpClient) { }

  buscarProducto(searchTerm: string): Observable<InfoProducto[]> {
    return this.getProductos().pipe(
      map((productos: InfoProducto[]) => {
        return productos.filter((producto) => {
          return (
            producto.titulo.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            producto.categoria.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
          );
        });
      })
    );
  }

  getDetallesProducto(id: string): Observable<DetalleProducto> {
    return this.httpClient.get<DetalleProducto>(`https://mic3l-portfolio-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  getProductos(): Observable<InfoProducto[]> {
    return this.httpClient.get<InfoProducto[]>('https://mic3l-portfolio-default-rtdb.firebaseio.com/productos_idx.json');
  }
}
