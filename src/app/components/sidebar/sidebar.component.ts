import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  loginForm!: FormGroup;

  constructor(
  private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  login(){
    if(this.loginForm.valid){
      return alert('Ha hecho login');
    }
    return alert('Email o contraseña no cumple con las validaciones');
  }

  crearFormulario(){
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email] ] ,
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
