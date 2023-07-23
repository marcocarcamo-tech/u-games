// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Lista para simular base de datos de los usuarios
  private users: {
    id: number,
    name: string,
    email: string,
    password: string,
  }[]=[{
    id: 1,
    name: 'José Díaz',
    email: 'jose@mail.com',
    password: 'uveg'
  }];

  constructor(){
    console.log('Authservice')
  }

  signedIn: boolean = false;

  

  logIn(email: string, password: string) {
    // Lógica de registro
    this.signedIn = true;
    const userFound = this.users.find((user) => user.email === email && user.password === password);

    if (userFound) {
      localStorage.setItem('isLogged', JSON.stringify(userFound));
      return true;
    } else {
      localStorage.clear();
      return false;
    }
  }

  logout() {
    this.signedIn = false;
    localStorage.clear();
  }

  signIn(name: string, email: string, password: string) {
    // Lógica de autenticación
    this.signedIn = true;
    const lastUser = this.users[this.users.length - 1];
    const newUser = {name, email, password, id : lastUser.id + 1};
    this.users = [
      ...this.users,
      newUser,
    ];
    localStorage.setItem('isLogged', JSON.stringify(newUser));
  }

}
