import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({providedIn: 'root'})

export class dbzService {
    
    public characters: Character [] = [
        {
            name: 'Krillin',
            power: 450,
            id: uuid()
        },
        {
            name: 'Goku',
            power: 9500,
            id: uuid()
        },
        {
            name: 'Vegeta',
            power: 7500,
            id: uuid()
        }
    ];

    onNewCharacter( character: Character ): void {

        const newCharacter: Character = { id: uuid(), ...character };
        this.characters.push(newCharacter);
    }

    onDeleteCharacter( characterToDelete:Character): void {
        this.characters = this.characters.filter( character => character.id !== characterToDelete.id );

        console.log('elemento con id: ', characterToDelete.id, 'eliminado con éxito');
    }
    
}