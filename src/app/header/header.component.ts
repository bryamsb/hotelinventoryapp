import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-header',
  standalone: true,
  templateUrl: './header.component.html', // Utiliza el archivo HTML para la plantilla
  styleUrls: ['./header.component.scss'] // Estilos en archivo separado
})
export class HeaderComponent implements OnInit {
  @Input() title: string = ''; // Inicializa el título como una cadena vacía

  constructor() {
    // Constructor vacío, puedes eliminarlo si no necesitas inicializar nada aquí
  }

  ngOnInit(): void {
    // Método de ciclo de vida de inicialización, puedes agregar lógica aquí si es necesario
  }
}
