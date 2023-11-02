import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent {
  usuario = {
    username: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  registrarUsuario() {
    this.authService.registrarUsuario(this.usuario).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (error) => {
        // Registro fallido: mostrar un mensaje de error.
      }
    );
  }


}
