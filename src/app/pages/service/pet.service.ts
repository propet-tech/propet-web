import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Pet } from '../model/pet.model';
​
@Injectable({
  providedIn: 'root'
})
export class PetService {
​
  constructor( private http: HttpClient) {}
​
  Create(pet: Pet){
    return this.http.post<Pet>(`${environment.api}/pet`, pet)
  }
}