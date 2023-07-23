// log-in.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent implements OnInit {
  logInForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.logInForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onLogIn() {
    if(this.logInForm.valid){
      console.log('Inicio de sesión correcto');
      const isValidUser = this.authService.logIn(
        this.logInForm.get('email').value,
        this.logInForm.get('password').value,
      );

      if (isValidUser){
        this.router.navigate(['/', 'module-home', 'home', 'most-popular']);
      } else {
        console.error('El usuario no existe');
      }
    } else {
      this.logInForm.markAllAsTouched();
      console.log('Ingrese todos los campos.')
    }
  }

  onSignIn(){
    this.router.navigate(['/', 'module-auth', 'sign-in'])
  }

  
}
