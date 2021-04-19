import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  _filtroLista: string = "";

  get filtroLista(): string {
    return this._filtroLista;
  }

  set filtroLista(value: string)
  {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  eventosFiltrados: any = [];

  eventos: any = [];

  constructor(private http: HttpClient) {}

  filtrarEventos(filtrarPor: string) : any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (      evento: { tema: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.http.get('http://localhost:5000/api/values').subscribe(
      (reponse) => {
        this.eventos = reponse;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
