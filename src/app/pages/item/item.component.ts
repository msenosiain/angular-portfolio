import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DetalleProducto } from 'src/app/interfaces/detalle-producto.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  detalleProducto: DetalleProducto = {} as DetalleProducto;
  productoId = '';

  constructor(private activatedRoute: ActivatedRoute, private productoService: ProductosService) { }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        this.productoId = params.id;
        return this.productoService.getDetallesProducto(this.productoId);
      })
    ).subscribe((detalleProducto: DetalleProducto) => {
      this.detalleProducto = detalleProducto;
    });
  }

}
