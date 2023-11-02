import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
})
export class InicioSesionComponent {
  credenciales = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    this.authService.iniciarSesion(this.credenciales).subscribe(
      (data) => {
        // Autenticación exitosa
        this.authService.isLoggedIn = true; // Establecer isLoggedIn a true
        this.router.navigate(['/lista-usuarios']);
      },
      (error) => {
        alert("Usuario o contraseña incorrectos");
        this.router.navigate(['/']);
      }
    );
  }

  redirigirARegistro() {
    this.router.navigate(['/registro']);
  }
}
