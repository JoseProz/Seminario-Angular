import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movie={
    "imagen":"assets/img/evangers.jpg",
    "nombre":"evangers",
    "genero":"Acción",
    "director":"Murphy",
    "duracion":"2hs01min"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
