import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { InfoProducto } from '../../interfaces/info-producto.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  productos: InfoProducto[] = [];
  loading = true;

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {

    this.productoService.getProductos().subscribe((productos: InfoProducto[]) => {
      this.productos = productos;

      // to simulate loading time (?)
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    });
  }

}
