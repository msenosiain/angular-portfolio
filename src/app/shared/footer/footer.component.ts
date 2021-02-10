import { Component, OnInit } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();
  info: InfoPagina = {} as InfoPagina;

  constructor(private infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {
    this.infoPaginaService.getInfo().subscribe((info: InfoPagina) => {
      this.info = info;
    });
  }

}
