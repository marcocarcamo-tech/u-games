// sign-in.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.signInForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
      
    });
  }

  onSignIn() {
    console.log('FormGroup: ', this.signInForm);
    const values = this.signInForm.value;
    const formIsValid = this.signInForm.valid;
    const controlName = this.signInForm.get('name');

    if (values.password === values.confirmPassword){
      console.log('Formulario válido.');

      this.authService.signIn(
        values.name,
        values.email,
        values.password,
      )

      this.router.navigate(['/', 'module-home', 'home', 'dashboard']);
    } else {
      console.error('Las contraseñas no son iguales');
    }
  }
}
