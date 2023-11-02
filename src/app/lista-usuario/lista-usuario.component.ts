import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuario.component.html',
})
export class ListaUsuariosComponent implements OnInit {
  listUsuario: Usuario[] = [];
  elementos: number = 0;
  isLoggedIn: boolean = false;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    // Verificar si el usuario ha iniciado sesión antes de obtener la lista de usuarios
    this.isLoggedIn = this._authService.isLoggedIn;
    
    if (this.isLoggedIn) {
      this.obtenerUsuarios();
    }
  }

  obtenerUsuarios() {
    this._authService.obtenerListaUsuarios().subscribe((response: any) => {
      if (response && response.users) {
        this.listUsuario = response.users;
        this.elementos = this.listUsuario.length;
      } else {
        // Manejar un caso en el que no se pudo obtener la lista de usuarios
        console.error('No se pudo obtener la lista de usuarios');
      }
    });
  }
  eliminarUsuario(userId: string) {
    // Mostrar una alerta de confirmación antes de eliminar
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');
    
    if (confirmar) {
      // El usuario confirmó la eliminación
      this._authService.eliminarUsuario(userId).subscribe(
        (data) => {
          // Eliminación exitosa
          // Vuelve a obtener la lista de usuarios para actualizarla
          this.obtenerUsuarios();
        },
        (error) => {
          console.error('Error al eliminar el usuario');
        }
      );
    }
  }
}
