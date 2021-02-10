import { Component, OnInit } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info: InfoPagina = {} as InfoPagina;

  constructor(private infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {
    this.infoPaginaService.getInfo().subscribe((info: InfoPagina) => {
      this.info = info;
    });
  }
}
