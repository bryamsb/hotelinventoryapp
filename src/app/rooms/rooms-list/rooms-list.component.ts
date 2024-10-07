import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = []; // Lista de habitaciones recibida del componente padre
  @Input() title: string ='';
  @Output() selectedRoom = new EventEmitter<RoomList>(); // Evento que emitirá la habitación seleccionada al componente padre

  constructor() {}

  ngOnChanges (changes: SimpleChanges): void {
    console.log( changes) ;
    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
    
  ngOnInit(): void {}

  // Método para emitir la habitación seleccionada
  selectRoom(room: RoomList) {
    console.log('Room selected:', room); // Agrega esta línea
    this.selectedRoom.emit(room);
  }
}
