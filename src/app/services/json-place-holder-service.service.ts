import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import JsonPlaceHolderModel from '../models/jsonPlaceHolder.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {

  constructor(private http: HttpClient ) { 
  }
    obtenerDatos():Observable<JsonPlaceHolderModel[]> {
      return this.http.get<JsonPlaceHolderModel[]>('https://jsonplaceholder.typicode.com/posts');
    
  }
}
