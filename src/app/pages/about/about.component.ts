import { Component, OnInit } from '@angular/core';
import { InfoMiembro } from 'src/app/interfaces/info-miembro.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  equipo: InfoMiembro[] = [];

  constructor(private infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {
    this.infoPaginaService.getEquipo().subscribe((equipo: InfoMiembro[]) => {
      this.equipo = equipo;
      console.log(this.equipo);
    });
  }

}
