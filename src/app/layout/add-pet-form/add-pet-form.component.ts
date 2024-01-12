import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule} from '@angular/forms';
import { PetService } from '../../../service/pet.service';
import { ProfileGalleryComponent } from '../profile-gallery/profile-gallery.component';


@Component({
  selector: 'app-add-pet-form',
  standalone: true,
  imports: [ReactiveFormsModule, ProfileGalleryComponent],
  templateUrl: './add-pet-form.component.html',
  styleUrl: './add-pet-form.component.css'
})
export class AddPetFormComponent {
  addPetForm = this.fb.group({
    id: new FormControl(''),
    name: new FormControl(''),
    kind: new FormControl(''),
    image: new FormControl(''),
    profileText: new FormControl(''),
    popularity: new FormControl('')
  });

  constructor(private fb: FormBuilder, private petService: PetService){};

  onSubmit(): any {
    this.petService.addPet(this.addPetForm.value).subscribe();
  }

}
