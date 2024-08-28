import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Output()
  onNewCharacter: EventEmitter <Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power:0
  }

  emitCharacter(): void{

    if( this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

  }

}
