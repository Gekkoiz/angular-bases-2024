import { Component } from '@angular/core';
import { dbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page-component.html'
})

export class MainPageComponent {

constructor( private dbzService: dbzService){}

get characters(): Character[]{

    return [...this.dbzService.characters];
}

onDeleteCharacter(character: Character): void
{
    this.dbzService.onDeleteCharacter(character);
}

onNewCharacter(character: Character):void{
    this.dbzService.onNewCharacter(character);
}

}