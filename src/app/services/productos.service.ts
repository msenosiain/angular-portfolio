import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoProducto } from '../interfaces/info-producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient: HttpClient) { }

  getProductos(): Observable<InfoProducto[]> {
    return this.httpClient.get<InfoProducto[]>('https://mic3l-portfolio-default-rtdb.firebaseio.com/productos_idx.json');
  }
}
