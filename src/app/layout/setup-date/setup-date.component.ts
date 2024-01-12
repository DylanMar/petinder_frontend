import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetService } from '../../../service/pet.service';
import { CommonModule } from '@angular/common';
import { Pet } from '../../../model/pet';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-setup-date',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './setup-date.component.html',
  styleUrl: './setup-date.component.css'
})
export class SetupDateComponent implements OnInit {
  pet?: Observable<Pet>;

  sendTextForm = this.fb.group({
    name: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private petService: PetService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const nameParam = params['name'];
      console.log('Name parameter:', nameParam);
      this.getPet(nameParam);
    });
  }

  onSubmit(): any {
    let name = this.sendTextForm.get('name')?.value;
    console.log(name);
    this.petService.sendMessage(name).subscribe(
      {
        next: (succes) => console.log(succes),
        error: (error) => console.log(error)
      }
    );
  }

  getPet(name: string): void {
    this.pet = this.petService.getPet(name);
  }

}
