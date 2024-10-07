import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RoomsComponent],
  templateUrl: './app.component.html',
  styles: [`h1 { color : red }`],
})
export class AppComponent implements AfterViewInit {
  title = 'hotelinventoryapp';
  role = 'Admin';

  // Asegúrate de que existe el contenedor en la plantilla
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngAfterViewInit() {
    if (this.vcr) {
      // Verificar que ViewContainerRef no es undefined
      const componentRef = this.vcr.createComponent(RoomsComponent);
      console.log("RoomsComponent creado dinámicamente");
    } else {
      console.error("ViewContainerRef no encontrado");
    }
  }
}
