import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from '../model/pet';

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], value: string): Pet[] {
    return pets.filter(
      pet => pet.name.toLowerCase().includes(value.toLowerCase())
    );
  }

}
