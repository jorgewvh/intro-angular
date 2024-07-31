import { Component, OnInit } from '@angular/core';
import JsonPlaceHolderModel from 'src/app/models/jsonPlaceHolder.model';
import { JsonPlaceHolderService } from 'src/app/services/json-place-holder-service.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  posts : JsonPlaceHolderModel[] = [];

  constructor(
    private _jsonPlaceHolderService: JsonPlaceHolderService
  ) { }

  ngOnInit(): void {
    this._jsonPlaceHolderService.obtenerDatos().subscribe(
      (data) => {
        this.posts = data;
      }
    );
  }

}
