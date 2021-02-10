import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductosService } from 'src/app/services/productos.service';
import { InfoProducto } from '../../interfaces/info-producto.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  productos: InfoProducto[] = [];
  loading = true;

  constructor(private activatedRoute: ActivatedRoute, private productoService: ProductosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        this.searchTerm = params.searchTerm;
        return this.productoService.buscarProducto(this.searchTerm);
      })
    ).subscribe((productos: InfoProducto[]) => {
      this.productos = productos;
      this.loading = false;
    });
  }

}
