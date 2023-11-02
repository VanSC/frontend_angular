// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  private apiBaseUrl = 'http://18.215.149.1:4000/api';

  constructor(private http: HttpClient) {}

  registrarUsuario(datosUsuario: any) {
    // Envia una solicitud POST al backend para registrar al usuario
    return this.http.post('http://18.215.149.1:4000/api/usuario', datosUsuario);
  }

  iniciarSesion(datosInicioSesion: any) {
    // Envia una solicitud POST al backend para iniciar sesión
    return this.http.post('http://18.215.149.1:4000/api/login/obtener', datosInicioSesion);
  }
  obtenerListaUsuarios() {
    // Realiza una solicitud GET al backend para obtener la lista de usuarios
    return this.http.get('http://18.215.149.1:4000/api/usuario');
  }

  eliminarUsuario(userId: string) {
    return this.http.delete(`http://18.215.149.1:4000/api/usuario/eliminar/${userId}`);
  }
}
