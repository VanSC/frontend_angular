import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
})
export class InicioSesionComponent {
  credenciales = {
    email: '',
    password: '',
  };

  user: any;
  loggedIn: any;

  constructor(private authServiceG: SocialAuthService, private authService: AuthService, private router: Router) { }

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

  ngOnInit() {
    this.authServiceG.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user);
      this.authService.isLoggedIn = true; // Establecer isLoggedIn a true
      this.router.navigate(['/lista-usuarios']);
    });
  }
}
