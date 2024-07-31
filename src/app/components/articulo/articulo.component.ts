import { Component,Input, OnInit } from '@angular/core';
import JsonPlaceHolderModel from 'src/app/models/jsonPlaceHolder.model';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() articulo: JsonPlaceHolderModel = {
    userId: 0,
    id: 0,
    title: "",
    body: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}





