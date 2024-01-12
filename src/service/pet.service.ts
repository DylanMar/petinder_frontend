import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { Pet } from '../model/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private _url: string;

  constructor(private http: HttpClient) {
    this._url = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this._url);
  }

  addPet(addPetForm: any) {
    return this.http.post(this._url, addPetForm);
  }

  getPet(name: string) {
    return this.http.get<Pet>(`${this._url}/${name}`);
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete(`${this._url}/${id}`);
  }

  sendMessage(message: any): Observable<any> {
    let WhastAppDTO = {
      name: message
    }
    return this.http.post(`${this._url}/sendText`, WhastAppDTO);
  }

}
