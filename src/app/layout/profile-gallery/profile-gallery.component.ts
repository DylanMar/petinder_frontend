import { Component, OnInit } from '@angular/core';
import { PetService } from '../../../service/pet.service';
import { Pet } from '../../../model/pet';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { NameFilterPipe } from "../../../pipes/name-filter.pipe";
import { FormsModule } from '@angular/forms';
import { AddPetFormComponent } from '../add-pet-form/add-pet-form.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-profile-gallery',
    standalone: true,
    templateUrl: './profile-gallery.component.html',
    styleUrl: './profile-gallery.component.css',
    imports: [CommonModule, NameFilterPipe, FormsModule, AddPetFormComponent, RouterLink]
})
export class ProfileGalleryComponent implements OnInit {

  pets?: Observable<Pet[]>;
  selectedPet?: Pet;
  searchText: string;

  constructor(private petService: PetService) {
    this.searchText = ''
  }

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.pets = this.petService.getPets().pipe(
      map( (pets: Pet[]) => pets.sort( (a: Pet, b: Pet) => a.name.localeCompare(b.name) ) )
    );
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet;
  }

  deletePet(): void {
    if (this.selectedPet) {
      this.petService.deletePet(this.selectedPet.id).subscribe(
        {
          next: () => this.getPets(),
          error: (error) => console.error('Error deleting pet: ', error)
    
        }
      );
    }
  }

}
