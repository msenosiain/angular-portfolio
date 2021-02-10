import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoMiembro } from '../interfaces/info-miembro.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  cargada = false;

  constructor(private httpClient: HttpClient) { }

  getInfo(): Observable<InfoPagina> {
    return this.httpClient.get<InfoPagina>('assets/data/data-pagina.json');
  }

  getEquipo(): Observable<InfoMiembro[]> {
    return this.httpClient.get<InfoMiembro[]>('https://mic3l-portfolio-default-rtdb.firebaseio.com/equipo.json');
  }
}
